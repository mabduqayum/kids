"use strict";(self.webpackChunkkids=self.webpackChunkkids||[]).push([[844],{2844:(Z,v,i)=>{i.r(v),i.d(v,{CoinsModule:()=>d});var C=i(6895),x=i(9197),h=i(9100);class y{constructor(n){this.value=n,this.next=null}}class A{constructor(){this.head=null,this.tail=null}append(n){let e=new y(n);this.head?(this.tail.next=e,this.tail=e):(this.head=e,this.tail=e)}}var Q=i(6308),t=i(4650),b=i(7274),M=i(9083),O=i(3238);function w(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"button",2)(1,"img",3),t.NdJ("click",function(){const a=t.CHM(e).index,c=t.oxw();return t.KtG(c.onAnswerClick(a))}),t.qZA()()}if(2&r){const e=n.$implicit,s=n.index,f=t.oxw();t.Q6J("ngClass",e),t.xp6(1),t.MGl("src","assets/coins/",f.currentQuestion.value.choices[s].src,".png",t.LSH)}}class p{constructor(n,e){this.dialog=n,this.router=e,this.fishers=["fluffy","dog","bird","cat"],this.allCoins=[],this.pulho=[],this.questions=new A,this.tangaho=[],this.setAllCoins(),this.setQuestions(),this.currentQuestion=this.questions.head}ngOnInit(){}onAnswerClick(n){this.currentQuestion.value.selectedChoiceIndex=n,this.currentQuestion.next?this.currentQuestion=this.currentQuestion.next:this.calculateResult()}setAllCoins(){const n=[1,2,5,10,20,25,50];for(const s of n)this.tangaho.push({src:`${s} dir`,value:s});const e=[1,3,5];for(const s of e)this.pulho.push({src:`${s} tjs`,value:100*s});this.allCoins=[...this.tangaho,...this.pulho],(0,h.TV)(this.allCoins)}setQuestions(){let a,c,P;function z(o){let u=0;for(let l=0;l<4;l++)o[l].value>o[u].value&&(u=l);return o[u]}function L(o){let u=0;for(let l=0;l<4;l++)o[l].value<o[u].value&&(u=l);return o[u]}const m=o=>{(0,h.TV)(a),P=function k(o,u){let l=0;for(;o[l].value!==u.value;)l++;return l}(a,c),this.questions.append({question:o,choices:a,rightChoiceIndex:P})};for(let o=0;o<2;o++)a=this.pulho.slice(),c=(0,h.mi)(this.tangaho),a.push(c),m('Choose "diram coin" among all off coins');for(let o=0;o<2;o++)a=(0,h.mp)(this.tangaho,3),c=(0,h.mi)(this.pulho),a.push(c),m('Choose "somoni coin" among all off coins');for(let o=0;o<2;o++)a=(0,h.mp)(this.allCoins,4),c=z(a),m('Choose "biggest coin" among all off coins');for(let o=0;o<2;o++)a=(0,h.mp)(this.allCoins,4),c=L(a),m('Choose "smallest coin" among all off coins')}calculateResult(){let n=0,s=this.questions.head;for(;s?.value;)s.value.selectedChoiceIndex===s.value.rightChoiceIndex&&n++,s=s.next;this.openDialog(n/8)}openDialog(n){this.dialog.open(Q.L,{data:n,width:"600px",disableClose:!0}).afterClosed().subscribe(s=>{"playAgain"===s?this.playAgain():"goToMenu"===s&&this.goToMenu()})}goToMenu(){this.router.navigate(["/"]).then(()=>{})}playAgain(){window.location.reload()}}p.\u0275fac=function(n){return new(n||p)(t.Y36(b.uw),t.Y36(x.F0))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-coins"]],decls:5,vars:2,consts:[["mat-ripple",""],["mat-ripple","",3,"ngClass",4,"ngFor","ngForOf"],["mat-ripple","",3,"ngClass"],["alt","",3,"src","click"]],template:function(n,e){1&n&&(t._UZ(0,"app-menu-button"),t.TgZ(1,"main")(2,"h2",0),t._uU(3),t.qZA(),t.YNc(4,w,2,2,"button",1),t.qZA()),2&n&&(t.xp6(3),t.Oqu(e.currentQuestion.value.question),t.xp6(1),t.Q6J("ngForOf",e.fishers))},dependencies:[C.mk,C.sg,M.p,O.wG],styles:["[_nghost-%COMP%]{width:auto;height:auto;display:flex;justify-content:center}main[_ngcontent-%COMP%]{position:relative;background-image:url(bg-full.a38e1fbdb282a284.png);background-size:contain;background-repeat:no-repeat;background-position:center;min-width:1440px;height:100vh}main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:absolute;top:40px;left:50%;transform:translate(-50%);background-color:#b9d;margin-left:50px;width:500px;text-align:center;border-radius:8px;font-size:2.5rem;color:#401940;padding:1rem}main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;cursor:pointer;border-radius:50%;background-color:transparent}main[_ngcontent-%COMP%]   button.fluffy[_ngcontent-%COMP%]{top:36%;left:32%;transform:translate(-32%)}main[_ngcontent-%COMP%]   button.dog[_ngcontent-%COMP%]{top:39%;left:63%;transform:translate(-63%)}main[_ngcontent-%COMP%]   button.bird[_ngcontent-%COMP%]{top:61%;left:19.7%;transform:translate(-19.7%)}main[_ngcontent-%COMP%]   button.cat[_ngcontent-%COMP%]{bottom:20%;left:55%;transform:translate(-55%)}"]});const T=[{path:"",component:p}];class g{}g.\u0275fac=function(n){return new(n||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[x.Bz.forChild(T),x.Bz]});var F=i(4463),I=i(7392),R=i(4859);class d{}d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[C.ez,g,M.p,F.aw,O.si,b.Is,I.Ps,R.ot]})}}]);