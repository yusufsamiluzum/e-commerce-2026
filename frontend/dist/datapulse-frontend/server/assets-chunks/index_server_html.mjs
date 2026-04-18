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
<link rel="stylesheet" href="styles-C6OED3VW.css"></head>
<body><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script>
  <app-root></app-root>
<link rel="modulepreload" href="chunk-M4HSLJ5G.js"><link rel="modulepreload" href="chunk-MF3K7DND.js"><link rel="modulepreload" href="chunk-CVYNC2GL.js"><link rel="modulepreload" href="chunk-3DOFM7PC.js"><link rel="modulepreload" href="chunk-I3AW7D6O.js"><script src="main-IYDTE7PR.js" type="module"></script></body>
</html>
`;