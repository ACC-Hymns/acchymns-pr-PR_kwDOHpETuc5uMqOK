import{_ as pe}from"./chevron-back-outline-421b5681.js";import{_ as ae}from"./chevron-forward-outline-f6241473.js";import{_ as me}from"./home-outline-15dad159.js";import{d as fe,r as _,Q as ye,c as ge,a6 as J,j as s,k as l,t as g,l as e,z as v,F as w,q as x,p as n,U as q,s as I,w as P,v as t,y as we,R as D,H as Ce,I as $e}from"./index-e0bdf4b5.js";import{_ as xe}from"./settings-9037a77f.js";import{u as ze}from"./navigator-47de01ae.js";import{U as A,v as Se,b as se,r as V,s as te,c as Ae}from"./broadcast-177dc9a6.js";const Be="/acchymns-pr-PR_kwDOHpETuc5zAJ8i/assets/ellipse.svg",Ne="/acchymns-pr-PR_kwDOHpETuc5zAJ8i/assets/backspace.svg",Te={class:"menu"},Oe={class:"title"},Re={class:"title--center"},Ee={key:0,class:"login-container"},Ie={class:"login-instructions"},Pe=["src"],De=l("p",null,"Please enter 4-digit PIN",-1),Ve={key:0,class:"ionicon pin-dot",src:Be},je={class:"keypad"},He=["onClick"],Le={key:0},Ue={key:1},Je=l("h4",null,"0",-1),qe=[Je],Fe={key:2,class:"backspace"},Ge=l("img",{class:"ionicon keyicon",src:Ne},null,-1),Ke=[Ge],Me={key:3},Qe={key:1,class:"main-content"},We={key:0},Xe={class:"center-container"},Ye=l("h3",null,"Reading Type",-1),Ze={key:0,class:"biblebook space"},es={key:1,class:"biblebook space"},ss={key:2,class:"biblebook space"},ts={key:3,class:"biblebook space"},as=l("h3",null,"Book",-1),os={class:"book-selector"},ns={key:0,class:"biblebook space"},ls={key:1,class:"biblebook space"},is={key:2,class:"biblebook space"},cs={key:3,class:"biblebook space"},us={class:"book-selector"},rs={key:0,class:"biblebook space"},_s={key:1,class:"biblebook space"},bs={key:2,class:"biblebook space"},ds={key:3,class:"biblebook space"},ks=l("h3",null,"Chapter",-1),vs={class:"number-selector"},hs={key:0,class:"biblebook space"},ps={key:1,class:"biblebook space"},ms={key:2,class:"biblebook space"},fs={key:3,class:"biblebook space"},ys={key:4,class:"biblebook space"},gs={key:5,class:"biblebook space"},ws={key:6,class:"biblebook space"},Cs={key:7,class:"biblebook space"},$s=l("h3",null,"Start Verse",-1),xs={class:"number-selector"},zs={key:0,class:"biblebook space"},Ss={key:1,class:"biblebook space"},As={key:2,class:"biblebook space"},Bs={key:3,class:"biblebook space"},Ns={key:4,class:"biblebook space"},Ts={key:5,class:"biblebook space"},Os={key:6,class:"biblebook space"},Rs={key:7,class:"biblebook space"},Es={key:0},Is={key:1,class:"number-selector"},Ps={key:0,class:"biblebook space"},Ds={key:1,class:"biblebook space"},Vs={key:2,class:"biblebook space"},js={key:3,class:"biblebook space"},Hs={key:4,class:"biblebook space"},Ls={key:5,class:"biblebook space"},Us={key:6,class:"biblebook space"},Js={key:7,class:"biblebook space"},qs={key:2},Fs={key:3,class:"number-selector"},Gs={key:0,class:"biblebook space"},Ks={key:1,class:"biblebook space"},Ms={key:2,class:"biblebook space"},Qs={key:3,class:"biblebook space"},Ws={key:4,class:"biblebook space"},Xs={key:5,class:"biblebook space"},Ys={key:6,class:"biblebook space"},Zs={key:7,class:"biblebook space"},et={key:1,class:"center-container"},st=l("h1",{style:{"margin-bottom":"0px"}},"Authorized",-1),tt={style:{"margin-top":"0px"}},at={class:"settings width-100"},ot={key:0,href:"/broadcast",class:"settings-option"},nt=l("span",null,"Open Output Display",-1),lt=l("img",{class:"entrypoint ionicon",src:ae},null,-1),it=[nt,lt],ct=l("span",null,"Set Biblie Reading",-1),ut=l("img",{class:"entrypoint ionicon",src:ae},null,-1),rt=[ct,ut],_t=l("span",null,"Clear Screeen",-1),bt=[_t],dt=l("span",null,"Log Out",-1),kt=[dt],vt={class:"nav"},ht=l("img",{class:"ionicon nav__icon",src:me},null,-1),pt=l("span",{class:"nav__text"},"Home",-1),mt=l("img",{class:"ionicon nav__icon",src:Ce},null,-1),ft=l("span",{class:"nav__text"},"Search",-1),yt=l("img",{class:"ionicon nav__icon",src:$e},null,-1),gt=l("span",{class:"nav__text"},"Bookmarks",-1),wt=l("img",{class:"ionicon nav__icon--active",src:xe},null,-1),Ct=l("span",{class:"nav__text"},"Settings",-1),Ot=fe({__name:"SettingsConnect",setup($t){const{back:oe}=ze(),T=_(!1),h=_(""),B=_(A.Authorized);let i=_(ye.getPlatform()),j=_(!1),N=_("LOADING"),O=_([]),C=_(),R=_(0);async function ne(c){return await Ae.post("https://iahifuumb7zasmzuv5xqpmi7fu0pwtkt.lambda-url.us-east-2.on.aws/",{code:c})}async function le(c){let o=c.data;if(c.status==200){await J.set({key:"broadcasting_auth_token",value:o.token}),B.value=A.Authorized;let a=await se(V());O.value=[];for(const[u,d]of Object.entries(a))O.value.push(d);N.value=o.church_id}else console.log(c.data),setTimeout(()=>{j.value=!1,h.value=""},400)}async function ie(){await te(V(),N.value,"","",[-1],"")}async function H(){await J.set({key:"broadcasting_auth_token",value:""}),B.value=A.Unauthorized,h.value="",T.value=!1}function ce(){h.value.length>0&&(h.value=h.value.substring(0,h.value.length-1))}function F(c){h.value+=c}function ue(){m.value?m.value=!1:oe()}async function re(c){if(c!=10&&(R.value=c,c==12?ce():c==11?F(0):F(c),!(h.value.length>4)&&h.value.length==4)){let o=await ne(h.value);T.value=o.status==200,T.value||(j.value=!0),setTimeout(()=>{le(o)},500)}}ge(async()=>{N.value="...",C.value=await(await fetch("/acchymns-pr-PR_kwDOHpETuc5zAJ8i/NKJV.bible.json",{})).json()||{version:"",books:[]};for(let[o,a]of C.value.books.entries())o>38?K.value.push(a):G.value.push(a);M(),E();let c=await J.get({key:"broadcasting_auth_token"});if(c.value!=""&&c.value!=null){let o=await Se(c.value);if(o.status!=200)return H();let a=o.data;B.value=A.Authorized;let u=await se(V());O.value=[];for(const[d,f]of Object.entries(u))O.value.push(f);N.value=a.church_id}else return H()});async function _e(c){var u,d,f,y,Z,ee;let o="",a="";k.value==1?(o=`${b.value}`,a=`${r.value}:${p.value}-${(f=(d=(u=C.value)==null?void 0:u.books.find(S=>S.name==b.value))==null?void 0:d.chapters.find(S=>S.num==r.value))==null?void 0:f.verses.length}`):k.value==2?(o=`${b.value}`,p.value==$.value?a=`${r.value}:${p.value}`:a=`${r.value}:${p.value}-${$.value}`):(o=`${b.value} `,a=`${r.value}:${p.value}-${(ee=(Z=(y=C.value)==null?void 0:y.books.find(S=>S.name==b.value))==null?void 0:Z.chapters.find(S=>S.num==r.value))==null?void 0:ee.verses.length}, ${z.value}:1-${$.value}`),await te(V(),N.value,o,"BIBLE",[],a),m.value=!1}let m=_(!1),G=_([]),K=_([]),b=_("Genesis"),r=_(1),z=_(1),p=_(1),$=_(1),k=_(1);function M(){r.value>W(b.value).length&&(r.value=1),z.value>X(b.value).length&&(z.value=r.value)}function E(){p.value>U(b.value,r.value).length&&(p.value=1),$.value>Y(b.value,k.value==3?z.value:r.value).length&&($.value=k.value==3?1:p.value),k.value==1&&($.value=U(b.value,r.value).length)}function Q(c){b.value=c.target.innerText,M(),E()}function be(c){r.value=Number.parseInt(c.target.innerText),E()}function de(c){z.value=Number.parseInt(c.target.innerText),E()}function ke(c){p.value=Number.parseInt(c.target.innerText)}function ve(c){$.value=Number.parseInt(c.target.innerText)}function L(c,o){k.value=o}function W(c){var a;return(((a=C.value)==null?void 0:a.books.find(u=>u.name==c))||{name:"",chapters:[]}).chapters}function X(c){var u;let o=((u=C.value)==null?void 0:u.books.find(d=>d.name==c))||{name:"",chapters:[]},a=[];if(r.value>0){for(let d=r.value+1;d<=(o==null?void 0:o.chapters.length);d++)a.push(o.chapters[d-1]);return a}return o.chapters}function U(c,o){var d;return((((d=C.value)==null?void 0:d.books.find(f=>f.name==c))||{name:"",chapters:[]}).chapters.find(f=>f.num==o)||{num:0,verses:[]}).verses}function Y(c,o){var f;let u=(((f=C.value)==null?void 0:f.books.find(y=>y.name==c))||{name:"",chapters:[]}).chapters.find(y=>y.num==o)||{num:0,verses:[]},d=[];if(p.value>0){for(let y=k.value==3?1:p.value;y<=(u==null?void 0:u.verses.length);y++)d.push(u.verses[y-1]);return d}return u.verses}function he(){return T.value?"/assets/lock-open-outline.svg":"/assets/lock-closed-outline.svg"}return(c,o)=>(t(),s(w,null,[l("div",Te,[l("div",Oe,[l("img",{onClick:o[0]||(o[0]=a=>ue()),class:"ionicon title--left",src:pe}),l("h1",Re,g(e(m)?"Bible Reading":"Broadcast"),1)])]),B.value==e(A).Unauthorized?(t(),s("div",Ee,[l("div",Ie,[l("img",{class:v(["ionicon",{unlocked:T.value}]),src:he()},null,10,Pe),De]),l("div",{class:v(["pin-input-container",{"pin-input--error":e(j)}])},[(t(),s(w,null,x(4,a=>l("div",{class:v(h.value.length==a-1?"pin-space-active":"pin-space")},[h.value.length>=a?(t(),s("img",Ve)):n("",!0)],2)),64))],2),l("div",je,[(t(),s(w,null,x(12,a=>l("div",{class:"key",onClick:u=>re(a),onAnimationend:o[1]||(o[1]=u=>q(R)?R.value=0:R=0),style:we({opacity:a==10?0:1})},[a==10?(t(),s("a",Le)):a==11?(t(),s("a",Ue,qe)):a==12?(t(),s("a",Fe,Ke)):(t(),s("a",Me,[l("h4",null,g(a),1)]))],44,He)),64))])])):B.value==e(A).Authorized?(t(),s("div",Qe,[e(m)?(t(),s("div",We,[l("div",Xe,[Ye,l("div",{class:v(["book-selector",{"hide-scrollbar":e(i)!=="web"}])},[e(i)!=="web"?(t(),s("a",Ze)):n("",!0),e(i)!=="web"?(t(),s("a",es)):n("",!0),l("a",{onClick:o[2]||(o[2]=a=>L(a,1)),class:v(["biblebook",{selected:e(k)==1}])},"Start Only",2),l("a",{onClick:o[3]||(o[3]=a=>L(a,2)),class:v(["biblebook",{selected:e(k)==2}])},"Start End",2),l("a",{onClick:o[4]||(o[4]=a=>L(a,3)),class:v(["biblebook",{selected:e(k)==3}])},"Start End Chapter",2),e(i)!=="web"?(t(),s("a",ss)):n("",!0),e(i)!=="web"?(t(),s("a",ts)):n("",!0)],2),as,l("div",os,[e(i)!=="web"?(t(),s("a",ns)):n("",!0),e(i)!=="web"?(t(),s("a",ls)):n("",!0),(t(!0),s(w,null,x(e(G),a=>(t(),s("a",{class:v(["biblebook",{selected:a.name==e(b)}]),onClick:o[5]||(o[5]=u=>Q(u)),key:a.name},g(a.name),3))),128)),e(i)!=="web"?(t(),s("a",is)):n("",!0),e(i)!=="web"?(t(),s("a",cs)):n("",!0)]),l("div",us,[e(i)!=="web"?(t(),s("a",rs)):n("",!0),e(i)!=="web"?(t(),s("a",_s)):n("",!0),(t(!0),s(w,null,x(e(K),a=>(t(),s("a",{class:v(["biblebook",{selected:a.name==e(b)}]),onClick:o[6]||(o[6]=u=>Q(u)),key:a.name},g(a.name),3))),128)),e(i)!=="web"?(t(),s("a",bs)):n("",!0),e(i)!=="web"?(t(),s("a",ds)):n("",!0)]),ks,l("div",vs,[e(i)!=="web"?(t(),s("a",hs)):n("",!0),e(i)!=="web"?(t(),s("a",ps)):n("",!0),e(i)!=="web"?(t(),s("a",ms)):n("",!0),e(i)!=="web"?(t(),s("a",fs)):n("",!0),(t(!0),s(w,null,x(W(e(b)),a=>(t(),s("a",{class:v(["biblebook",{selected:a.num==e(r)}]),onClick:o[7]||(o[7]=u=>be(u)),key:a.num},g(a.num),3))),128)),e(i)!=="web"?(t(),s("a",ys)):n("",!0),e(i)!=="web"?(t(),s("a",gs)):n("",!0),e(i)!=="web"?(t(),s("a",ws)):n("",!0),e(i)!=="web"?(t(),s("a",Cs)):n("",!0)]),$s,l("div",xs,[e(i)!=="web"?(t(),s("a",zs)):n("",!0),e(i)!=="web"?(t(),s("a",Ss)):n("",!0),e(i)!=="web"?(t(),s("a",As)):n("",!0),e(i)!=="web"?(t(),s("a",Bs)):n("",!0),(t(!0),s(w,null,x(U(e(b),e(r)),a=>(t(),s("a",{class:v(["biblebook",{selected:a.num==e(p)}]),onClick:o[8]||(o[8]=u=>ke(u)),key:a.num},g(a.num),3))),128)),e(i)!=="web"?(t(),s("a",Ns)):n("",!0),e(i)!=="web"?(t(),s("a",Ts)):n("",!0),e(i)!=="web"?(t(),s("a",Os)):n("",!0),e(i)!=="web"?(t(),s("a",Rs)):n("",!0)]),e(k)==3?(t(),s("h3",Es,"End Chapter")):n("",!0),e(k)==3?(t(),s("div",Is,[e(i)!=="web"?(t(),s("a",Ps)):n("",!0),e(i)!=="web"?(t(),s("a",Ds)):n("",!0),e(i)!=="web"?(t(),s("a",Vs)):n("",!0),e(i)!=="web"?(t(),s("a",js)):n("",!0),(t(!0),s(w,null,x(X(e(b)),a=>(t(),s("a",{class:v(["biblebook",{selected:a.num==e(z)}]),onClick:o[9]||(o[9]=u=>de(u)),key:a.num},g(a.num),3))),128)),e(i)!=="web"?(t(),s("a",Hs)):n("",!0),e(i)!=="web"?(t(),s("a",Ls)):n("",!0),e(i)!=="web"?(t(),s("a",Us)):n("",!0),e(i)!=="web"?(t(),s("a",Js)):n("",!0)])):n("",!0),e(k)>1?(t(),s("h3",qs,"End Verse")):n("",!0),e(k)>1?(t(),s("div",Fs,[e(i)!=="web"?(t(),s("a",Gs)):n("",!0),e(i)!=="web"?(t(),s("a",Ks)):n("",!0),e(i)!=="web"?(t(),s("a",Ms)):n("",!0),e(i)!=="web"?(t(),s("a",Qs)):n("",!0),(t(!0),s(w,null,x(Y(e(b),e(k)==3?e(z):e(r)),a=>(t(),s("a",{class:v(["biblebook",{selected:a.num==e($)}]),onClick:o[10]||(o[10]=u=>ve(u)),key:a.num},g(a.num),3))),128)),e(i)!=="web"?(t(),s("a",Ws)):n("",!0),e(i)!=="web"?(t(),s("a",Xs)):n("",!0),e(i)!=="web"?(t(),s("a",Ys)):n("",!0),e(i)!=="web"?(t(),s("a",Zs)):n("",!0)])):n("",!0),l("div",null,[l("button",{class:"send-button",onClick:o[11]||(o[11]=a=>_e())},"Send")]),l("button",{class:"settings-button",onClick:o[12]||(o[12]=a=>q(m)?m.value=!1:m=!1)},"Back")])])):B.value==e(A).Authorized?(t(),s("div",et,[st,l("h3",tt,"as "+g(e(N)),1),l("div",at,[e(i)=="web"?(t(),s("a",ot,it)):n("",!0),l("a",{onClick:o[13]||(o[13]=a=>q(m)?m.value=!0:m=!0),class:"settings-option"},rt),l("a",{onClick:ie,class:"settings-option"},bt),l("a",{onClick:H,class:"settings-option"},kt)])])):n("",!0),l("nav",vt,[I(e(D),{to:"/",class:"nav__link"},{default:P(()=>[ht,pt]),_:1}),I(e(D),{to:"/search",class:"nav__link"},{default:P(()=>[mt,ft]),_:1}),I(e(D),{to:"/bookmarks",class:"nav__link"},{default:P(()=>[yt,gt]),_:1}),I(e(D),{to:"/settings",class:"nav__link nav__link--active"},{default:P(()=>[wt,Ct]),_:1})])])):n("",!0)],64))}});export{Ot as default};
