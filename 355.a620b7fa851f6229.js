"use strict";(self.webpackChunkkids=self.webpackChunkkids||[]).push([[355],{7355:(M,d,i)=>{i.r(d),i.d(d,{CompareModule:()=>u});var m=i(6895),p=i(4843),r=i(6578),t=i(4650),g=i(4218),h=i(4859);function C(o,n){if(1&o&&(t.ynx(0),t.TgZ(1,"h1"),t._uU(2),t.ALo(3,"percent"),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.BQk()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,e.data)),t.xp6(3),t.Oqu(e.message)}}function y(o,n){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Nope!!!"),t.qZA(),t.TgZ(2,"p"),t._uU(3,"You got at least one wrong."),t.qZA())}class l{constructor(n,e){this.data=n,this.dialogRef=e,this.message=this.getMessage(n)}onKeyUp(){this.dialogRef.close()}getMessage(n){return n<.5?"Try next time":n<.65?"Good":n<.75?"Well done":n<1?"Excellent":"Perfect"}}l.\u0275fac=function(n){return new(n||l)(t.Y36(r.WI),t.Y36(r.so))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-compare-result"]],hostBindings:function(n,e){1&n&&t.NdJ("keyup.esc",function(){return e.onKeyUp()},!1,t.Jf7)},decls:12,vars:2,consts:[[4,"ngIf","ngIfElse"],["wrongAns",""],["mat-stroked-button","","color","primary","mat-dialog-close","playAgain"],["mat-raised-button","","color","primary","cdkFocusInitial","","mat-dialog-close","goToMenu"]],template:function(n,e){if(1&n&&(t.YNc(0,C,6,4,"ng-container",0),t.YNc(1,y,4,0,"ng-template",null,1,t.W1O),t.TgZ(3,"mat-dialog-actions")(4,"button",2)(5,"mat-icon"),t._uU(6,"replay"),t.qZA(),t._uU(7," Play Again "),t.qZA(),t.TgZ(8,"button",3)(9,"mat-icon"),t._uU(10,"arrow_forward"),t.qZA(),t._uU(11," Go to Menu "),t.qZA()()),2&n){const s=t.MAs(2);t.Q6J("ngIf",e.data)("ngIfElse",s)}},dependencies:[m.O5,r.ZT,r.H8,g.Hw,h.lW,m.Zx],styles:["h1[_ngcontent-%COMP%]{text-align:center;padding-block:1rem 2rem;font-size:4rem}p[_ngcontent-%COMP%]{text-align:center;font-size:2rem}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;column-gap:1rem;margin-block:2rem}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1.5rem 2rem}mat-dialog-actions[_ngcontent-%COMP%]     .mdc-button__label{font-size:1.5rem}"]});var f=i(9083);class c{constructor(n,e){this.dialog=n,this.router=e,this.questions=[],this.currentIndex=0,this.points=0,this.isQuizCompleted=!1}ngOnInit(){this.generateQuestions(),this.setCurrentQuestion()}onLeftClick(){this.isQuizCompleted||this.onClick()}onRightClick(){this.isQuizCompleted||this.onClick(!0)}nextQuestion(){this.currentIndex++,this.setCurrentQuestion()}setCurrentQuestion(){this.currentQuestion=this.questions[this.currentIndex]}onClick(n){this.currentQuestion.submittedAnswer=n?1:0,this.currentQuestion.actualAnswer=this.currentQuestion.left<this.currentQuestion.right?0:this.currentQuestion.left>this.currentQuestion.right?1:this.currentQuestion.submittedAnswer,this.currentIndex!==this.questions.length-1?this.nextQuestion():this.completeQuiz()}generateQuestions(){for(let n=0;n<4;n++)this.questions.push({left:this.randInt(1,9),right:this.randInt(1,9)});for(let n=0;n<3;n++)this.questions.push({left:this.randInt(1,20),right:this.randInt(1,20)});for(let n=0;n<3;n++)this.questions.push({left:this.randInt(1,100),right:this.randInt(1,99)})}goToMenu(){this.router.navigate(["/"]).then(()=>{})}playAgain(){window.location.reload()}completeQuiz(){this.isQuizCompleted=!0;const n=this.questions.length;let e=0;for(const s of this.questions)s.actualAnswer===s.submittedAnswer&&e++;this.points=e/n,this.openDialog()}openDialog(){this.dialog.open(l,{data:this.points,width:"600px",disableClose:!0}).afterClosed().subscribe(e=>{"playAgain"===e?this.playAgain():"goToMenu"===e&&this.goToMenu()})}randInt(n,e){return Math.floor(Math.random()*e+n)}}c.\u0275fac=function(n){return new(n||c)(t.Y36(r.uw),t.Y36(p.F0))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-compare"]],hostBindings:function(n,e){1&n&&t.NdJ("keydown.ArrowLeft",function(){return e.onLeftClick()},!1,t.Jf7)("keydown.ArrowRight",function(){return e.onRightClick()},!1,t.Jf7)},decls:13,vars:2,consts:[[3,"click"],["src","assets/compare/bear.svg","alt",""]],template:function(n,e){1&n&&(t._UZ(0,"app-menu-button"),t.TgZ(1,"header")(2,"h2"),t._uU(3,"Compare Numbers"),t.qZA()(),t.TgZ(4,"main")(5,"aside")(6,"button",0),t.NdJ("click",function(){return e.onLeftClick()}),t._uU(7),t.qZA()(),t.TgZ(8,"section"),t._UZ(9,"img",1),t.qZA(),t.TgZ(10,"aside")(11,"button",0),t.NdJ("click",function(){return e.onRightClick()}),t._uU(12),t.qZA()()()),2&n&&(t.xp6(7),t.hij(" ",null==e.currentQuestion?null:e.currentQuestion.left,""),t.xp6(5),t.hij(" ",null==e.currentQuestion?null:e.currentQuestion.right,""))},dependencies:[f.p],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background-color:#cdf}h2[_ngcontent-%COMP%]{background-color:#b9d;width:600px;text-align:center;border-radius:8px;font-size:2.5rem;color:#401940;padding:1rem}main[_ngcontent-%COMP%]{display:flex;align-items:center;column-gap:4rem;margin:2rem}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:2rem;font-size:8rem;border-radius:8px;width:220px;aspect-ratio:1;background-color:#adb;color:#204020;cursor:pointer;transition:all .3s}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:drop-shadow(0px 10px 4px #506657) hue-rotate(15deg)}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;object-fit:contain}"]});const A=[{path:"",component:c}];class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.Bz.forChild(A),p.Bz]});class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[m.ez,a,f.p,r.Is,g.Ps,h.ot]})}}]);