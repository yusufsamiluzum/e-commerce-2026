#!/bin/bash
CHANGED_FILE=$1

# 1. ANGULAR KONTROLÜ (Formatlama)
if [[ "$CHANGED_FILE" =~ \.(ts|html|scss)$ ]]; then
    echo "AI Hook: Prettier ile formatlanıyor -> $CHANGED_FILE"
    npx prettier --write "$CHANGED_FILE"
fi

# 2. SPRING BOOT KONTROLÜ (Otomatik Derleme)
if [[ "$CHANGED_FILE" =~ \.java$ ]]; then
    echo "AI Hook: Java dosyası değişti, backend derleniyor..."
    
    # Proje dosyalarına göre backend klasörüne geçiş yap
    cd backend || { echo "Backend klasörü bulunamadı!"; exit 1; }
    
    # Projendeki Maven Wrapper'ı kullanarak sadece derleme (compile) yap
    COMPILE_OUTPUT=$(./mvnw compile 2>&1)
    
    # Eğer derleme başarısız olursa ($? sıfırdan farklıysa)
    if [ $? -ne 0 ]; then
        echo "❌ AI Hook Uyarısı: Java derleme hatası tespit edildi!"
        echo "Lütfen aşağıdaki hatayı incele ve kodu hemen düzelt:"
        echo "$COMPILE_OUTPUT" | grep -A 15 "\[ERROR\]"
        exit 1
    else
        echo "✅ AI Hook: Backend başarıyla derlendi. Syntax hatası yok."
    fi
fi
