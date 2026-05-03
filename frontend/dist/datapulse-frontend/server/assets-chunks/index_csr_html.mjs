export default `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>DataPulse</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>
    /* Angular yüklenene kadar beyaz flash'ı önle */
    html, body { background: #0a0a0f; margin: 0; padding: 0; }

    /* app-root boşken göster, Angular boot olunca kaybolur */
    app-root:empty {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    app-root:empty::after {
      content: '';
      width: 40px;
      height: 40px;
      border: 3px solid rgba(59, 130, 246, 0.15);
      border-top-color: #3b82f6;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>
<link rel="stylesheet" href="styles.css"></head>
<body ngcm="">
  <app-root></app-root>
<link rel="modulepreload" href="chunk-BRARNRY3.js"><link rel="modulepreload" href="chunk-OLUDDFS4.js"><link rel="modulepreload" href="chunk-BONAVTPV.js"><link rel="modulepreload" href="chunk-N6CICK2R.js"><link rel="modulepreload" href="chunk-27YRKIWA.js"><link rel="modulepreload" href="chunk-OBD62CNA.js"><link rel="modulepreload" href="chunk-H2SRQSE4.js"><script src="main.js" type="module"></script></body>
</html>
`;