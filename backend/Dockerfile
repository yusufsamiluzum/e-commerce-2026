# Stage 1: Build the application
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /app
# Copy the Maven wrapper and project object model
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
# Make the wrapper executable and download dependencies
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B
# Copy the source code and build the application
COPY src src
RUN ./mvnw clean package -DskipTests

# Stage 2: Create the minimal runtime image
FROM eclipse-temurin:21-jre
WORKDIR /app
# Copy only the compiled jar file from the builder stage
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
