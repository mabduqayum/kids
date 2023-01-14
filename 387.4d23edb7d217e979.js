"use strict";(self.webpackChunkkids=self.webpackChunkkids||[]).push([[387],{7387:(Z,p,s)=>{s.r(p),s.d(p,{CompareModule:()=>u});var h=s(6895),m=s(9197),r=s(7274),t=s(4650),g=s(7392),f=s(4859),d=s(4463);class c{constructor(e,n){this.data=e,this.dialogRef=n,this.updateMessage(e)}onKeyUp(){this.dialogRef.close()}updateMessage(e){this.message=e<.5?"next_time":e<.65?"good":e<.75?"well_done":e<1?"excellent":"perfect"}}c.\u0275fac=function(e){return new(e||c)(t.Y36(r.WI),t.Y36(r.so))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-compare-result"]],hostBindings:function(e,n){1&e&&t.NdJ("keyup.esc",function(){return n.onKeyUp()},!1,t.Jf7)},decls:17,vars:12,consts:[["mat-stroked-button","","color","primary","mat-dialog-close","playAgain"],["mat-raised-button","","color","primary","cdkFocusInitial","","mat-dialog-close","goToMenu"]],template:function(e,n){1&e&&(t.TgZ(0,"h1"),t._uU(1),t.ALo(2,"percent"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"mat-dialog-actions")(7,"button",0)(8,"mat-icon"),t._uU(9,"replay"),t.qZA(),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"button",1)(13,"mat-icon"),t._uU(14,"arrow_forward"),t.qZA(),t._uU(15),t.ALo(16,"translate"),t.qZA()()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,4,n.data)),t.xp6(3),t.Oqu(t.lcZ(5,6,"compare."+n.message)),t.xp6(6),t.hij(" ",t.lcZ(11,8,"compare.play_again")," "),t.xp6(5),t.hij(" ",t.lcZ(16,10,"compare.go_to_menu")," "))},dependencies:[r.ZT,r.H8,g.Hw,f.lW,h.Zx,d.X$],styles:["h1[_ngcontent-%COMP%]{text-align:center;padding-block:1rem 2rem;font-size:4rem}p[_ngcontent-%COMP%]{text-align:center;font-size:2rem}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;column-gap:1rem;margin-block:2rem}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1.5rem 2rem}mat-dialog-actions[_ngcontent-%COMP%]     .mdc-button__label{font-size:1.5rem}"]});var M=s(5963);var b=s(9083);const y=["left"],A=["right"];class l{constructor(e,n){this.dialog=e,this.router=n,this.questions=[],this.currentIndex=0,this.points=0,this.isQuizCompleted=!1}ngOnInit(){this.generateQuestions(),this.setCurrentQuestion()}onLeftClick(){this.isQuizCompleted||(this.setTimedFocus(this.leftBtn),this.onClick())}onRightClick(){this.isQuizCompleted||(this.setTimedFocus(this.rightBtn),this.onClick(!0))}setTimedFocus(e){this.timerSub&&this.timerSub.unsubscribe(),e.nativeElement.focus(),function C(o){o&&!o.closed&&o.unsubscribe()}(this.timerSub),this.timerSub=(0,M.H)(200).subscribe(()=>e.nativeElement.blur())}nextQuestion(){this.currentIndex++,this.setCurrentQuestion()}setCurrentQuestion(){this.currentQuestion=this.questions[this.currentIndex]}onClick(e){this.currentQuestion.submittedAnswer=e?1:0,this.currentQuestion.actualAnswer=this.currentQuestion.left<this.currentQuestion.right?0:this.currentQuestion.left>this.currentQuestion.right?1:this.currentQuestion.submittedAnswer,this.currentIndex!==this.questions.length-1?this.nextQuestion():this.completeQuiz()}generateQuestions(){for(let e=0;e<4;e++)this.questions.push({left:this.randInt(1,9),right:this.randInt(1,9)});for(let e=0;e<3;e++)this.questions.push({left:this.randInt(1,20),right:this.randInt(1,20)});for(let e=0;e<3;e++)this.questions.push({left:this.randInt(1,100),right:this.randInt(1,99)})}goToMenu(){this.router.navigate(["/"]).then(()=>{})}playAgain(){window.location.reload()}completeQuiz(){this.isQuizCompleted=!0;const e=this.questions.length;let n=0;for(const i of this.questions)i.actualAnswer===i.submittedAnswer&&n++;this.points=n/e,this.openDialog()}openDialog(){this.dialog.open(c,{data:this.points,width:"600px",disableClose:!0}).afterClosed().subscribe(n=>{"playAgain"===n?this.playAgain():"goToMenu"===n&&this.goToMenu()})}randInt(e,n){return Math.floor(Math.random()*(n-e)+e)}}l.\u0275fac=function(e){return new(e||l)(t.Y36(r.uw),t.Y36(m.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-compare"]],viewQuery:function(e,n){if(1&e&&(t.Gf(y,5),t.Gf(A,5)),2&e){let i;t.iGM(i=t.CRH())&&(n.leftBtn=i.first),t.iGM(i=t.CRH())&&(n.rightBtn=i.first)}},hostBindings:function(e,n){1&e&&t.NdJ("keydown.ArrowLeft",function(){return n.onLeftClick()},!1,t.Jf7)("keydown.ArrowRight",function(){return n.onRightClick()},!1,t.Jf7)},decls:16,vars:5,consts:[["tabindex","0",3,"click"],["left",""],["src","assets/compare/bear.svg","alt",""],["right",""]],template:function(e,n){1&e&&(t._UZ(0,"app-menu-button"),t.TgZ(1,"header")(2,"h2"),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.TgZ(5,"main")(6,"aside")(7,"button",0,1),t.NdJ("click",function(){return n.onLeftClick()}),t._uU(9),t.qZA()(),t.TgZ(10,"section"),t._UZ(11,"img",2),t.qZA(),t.TgZ(12,"aside")(13,"button",0,3),t.NdJ("click",function(){return n.onRightClick()}),t._uU(15),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,3,"compare.compare_numbers")),t.xp6(6),t.hij(" ",null==n.currentQuestion?null:n.currentQuestion.left,""),t.xp6(6),t.hij(" ",null==n.currentQuestion?null:n.currentQuestion.right,""))},dependencies:[b.p,d.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background-color:#cdf}h2[_ngcontent-%COMP%]{background-color:#b9d;width:600px;text-align:center;border-radius:8px;font-size:2.5rem;color:#401940;padding:1rem}main[_ngcontent-%COMP%]{display:flex;align-items:center;column-gap:4rem;margin:2rem}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:2rem;font-size:8rem;border-radius:8px;width:220px;aspect-ratio:1;background-color:#adb;color:#204020;cursor:pointer;transition:all .3s}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{filter:drop-shadow(0px 10px 4px #506657) hue-rotate(15deg)}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible{outline:none}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;object-fit:contain}"]});const Q=[{path:"",component:l}];class a{}a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.Bz.forChild(Q),m.Bz]});class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[h.ez,a,b.p,r.Is,g.Ps,f.ot,d.aw]})}}]);