import './polyfills.server.mjs';
import{J as r,O as n,ad as o}from"./chunk-7Z53PZZF.mjs";var i=class e{http=n(o);apiUrl="http://localhost:8080/api/refunds";getMyRefunds(){return this.http.get(this.apiUrl)}createRefund(t){return this.http.post(this.apiUrl,t)}static \u0275fac=function(s){return new(s||e)};static \u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})};export{i as a};
