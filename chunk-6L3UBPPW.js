import{A as Y,B as Z,C as ee,D as te,E as ne,F as ie,G as O,H as b,I as w,J as oe,K as x,d as $,e as U,f as j,g as Q,o as B,p as q,t as G,w as J,x as K,y as W,z as X}from"./chunk-P475GCJX.js";import{Ab as m,Bb as s,Cb as h,Db as F,Eb as z,Gb as y,Ib as u,Jb as o,Mb as N,Ob as S,Pb as M,Qb as T,Ub as I,Va as a,Vb as k,Wa as A,_ as R,ac as L,cb as C,da as H,la as P,ma as g,na as _,pb as d,rb as r,tb as V,ua as E}from"./chunk-TQJMELAP.js";var se=()=>[10,15,20,50,100];function ce(i,n){if(i&1&&(m(0,"span"),I(1),s()),i&2){let e=o(2).index,t=o(2);a(),k(t.displayColumns[e])}}function pe(i,n){if(i&1&&(m(0,"th",13),d(1,ce,2,1,"span",14),s()),i&2){let e=o().index,t=o(2);r("disabled",t.sortColumn.includes(t.displayColumns[e])),a(),r("ngIf",!((t.iconHeader==null?null:t.iconHeader.indexOf(t.displayColumns[e]))>-1))}}function de(i,n){if(i&1&&(m(0,"span",17),I(1),s()),i&2){let e=o().$implicit,t=o().$implicit;a(),k(e[t])}}function ue(i,n){if(i&1){let e=y();m(0,"td",15),u("click",function(){let l=g(e).$implicit,c=o().index,p=o(2);return _((p.eventColumn==null?null:p.eventColumn.indexOf(p.displayColumns[c]))>-1?p.rowEventTrigger(p.displayColumns[c],l):p.rowEventTrigger("row",l))}),d(1,de,2,1,"span",16),s()}if(i&2){let e=o().index,t=o(2);a(),r("ngIf",!((t.iconColumn==null?null:t.iconColumn.indexOf(t.displayColumns[e]))>-1))}}function fe(i,n){if(i&1&&(F(0,10),d(1,pe,2,2,"th",11)(2,ue,2,1,"td",12),z()),i&2){let e=n.index,t=o(2);N("matColumnDef",t.displayColumns[e])}}function ge(i,n){i&1&&h(0,"tr",18)}function _e(i,n){if(i&1){let e=y();m(0,"tr",19),u("click",function(){let l=g(e).$implicit,c=o(2);return _(c.onRowClick(l))}),s()}if(i&2){let e=n.$implicit,t=o(2);V("selected",t.selectedRow===e)}}function Ce(i,n){if(i&1){let e=y();m(0,"div",3)(1,"div",4)(2,"table",5),d(3,fe,3,1,"ng-container",6)(4,ge,1,0,"tr",7)(5,_e,1,2,"tr",8),s()(),m(6,"mat-paginator",9,0),u("page",function(l){g(e);let c=o();return _(c.pagination?c.rowEventTrigger("pagination",l):null)}),s()()}if(i&2){let e=o();a(2),r("dataSource",e.dataSource),a(),r("ngForOf",e.columnData),a(),r("matHeaderRowDef",e.displayColumns)("matHeaderRowDefSticky",!0),a(),r("matRowDefColumns",e.displayColumns),a(),r("length",e.pageLength)("pageSize",e.pageSize)("pageSizeOptions",L(8,se))}}var v=class i{displayedColumn;tableData;displayColumns=[];component;iconHeader;iconColumn;eventColumn;columnData;sortColumn;pagination;applyFilter;rowAction=new E;selection=new G(!0,[]);showTable=!1;dataSource=new O;pageLength=null;pageSize=null;selectedRow;paginator;set sort(n){this.dataSource.sort=n}set matPaginator(n){n&&(this.paginator=n,this.dataSource.paginator=this.paginator)}constructor(){}rowEventTrigger(n,e,t){this.rowAction.emit({key:n,data:e,keyVal:t})}ngOnChanges(n){this.pagination!==null&&this.pagination&&(this.pageLength=this.pagination[0].length,this.pageSize=this.pagination[0].pageSize),this.selectedRow=null,this.tableData&&n.tableData&&(this.showTable=!1,n.tableData.previousValue!==n.tableData.currentValue&&(this.showTable||(this.dataSource=new O(this.tableData),this.showTable=!0,this.pagination===null&&(this.dataSource.paginator=this.pagination),this.dataSource.sort=this.sort)))}ngAfterViewInit(){this.paginator&&(this.dataSource.paginator=this.paginator)}onRowClick(n){this.selectedRow=n}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-dynamic-table"]],viewQuery:function(e,t){if(e&1&&(S(w,5),S(b,5)),e&2){let l;M(l=T())&&(t.sort=l.first),M(l=T())&&(t.matPaginator=l.first)}},inputs:{tableData:"tableData",displayColumns:"displayColumns",component:"component",iconHeader:"iconHeader",iconColumn:"iconColumn",eventColumn:"eventColumn",columnData:"columnData",sortColumn:"sortColumn",pagination:"pagination",applyFilter:"applyFilter"},outputs:{rowAction:"rowAction"},features:[P],decls:2,vars:1,consts:[["paginator",""],[2,"width","100%","height","100%"],["fxLayout","column","fxLayoutGap","5px","style","max-height: 100%;",4,"ngIf"],["fxLayout","column","fxLayoutGap","5px",2,"max-height","100%"],[1,"rff-mat-table-overflow"],["mat-table","","matSort","",1,"scrollable-table",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","","class","manage-table-header-row text-white",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","manage-table-row Refer-font-family",3,"selected","click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",1,"reff-pagination",3,"page","length","pageSize","pageSizeOptions"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","","style","justify-content: flex-start;",3,"disabled",4,"matHeaderCellDef"],["mat-cell","",3,"click",4,"matCellDef"],["mat-header-cell","","mat-sort-header","",2,"justify-content","flex-start",3,"disabled"],[4,"ngIf"],["mat-cell","",3,"click"],["class","table-text",4,"ngIf"],[1,"table-text"],["mat-header-row","",1,"manage-table-header-row","text-white"],["mat-row","",1,"manage-table-row","Refer-font-family",3,"click"]],template:function(e,t){e&1&&(m(0,"div",1),d(1,Ce,8,9,"div",2),s()),e&2&&(a(),r("ngIf",t.showTable))},dependencies:[x,J,W,ee,X,K,te,Y,Z,ne,ie,b,w,oe,j,$,U],styles:["mat-mdc-paginator-container[_ngcontent-%COMP%]{min-height:40px}.manage-table-row[_ngcontent-%COMP%]{font-size:12px;min-height:40px;height:40px!important}.manage-table-row.selected[_ngcontent-%COMP%]{background-color:#cacaca}.manage-table-header-row[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2;background:#007cbf;color:#fff;height:35px}.manage-table-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}.manage-table-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#fbfcff}.rff-mat-table-overflow[_ngcontent-%COMP%]{max-height:calc(100vh - 160px);overflow-y:auto;overflow-x:auto;border:1px solid #e0e0e0}.scrollable-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.reff-pagination[_ngcontent-%COMP%]{background-color:#f5f5f5;position:relative}"]})};var le={server_time_out:18e4,server_time_out_error_msg:"",get_models:"model/models",get_purchase_list:"purchase",look_up:"conf/look-up"};var f={production:!0,base_value:le,apiUrl:"https://c86bdf69-ddf6-414d-91db-c5a8f51b6d44.mock.pstmn.io/"};var D=class i{constructor(n){this.http=n}apiUrl=f.apiUrl;getLookUpTerms(n){return this.http.get(`${this.apiUrl+f.base_value.look_up+"?groupNames="+n}`)}getModel(){return this.http.get(`${this.apiUrl+f.base_value.get_models}`)}getPurchase(){return this.http.get(`${this.apiUrl+f.base_value.get_purchase_list}`)}static \u0275fac=function(e){return new(e||i)(H(Q))};static \u0275prov=R({token:i,factory:i.\u0275fac,providedIn:"root"})};var re=class i{constructor(n){this.apiService=n}modelsData=[];displayColumn=["Item Id","Label","Brand Id","Brand Name","Base Percentage"];iconHeader=[];column=["itemId","label","brandId","brandName","basePercentage"];iconColumn=[];eventColumn=[];sortColumn=[];length=0;start=0;pageSize=50;ngOnInit(){this.getAllModels()}rowAction(n){}getAllModels(){this.apiService.getModel().subscribe(n=>{this.modelsData=n,this.length=this.modelsData.length,console.log(this.length);for(let e=0;e<=this.column.length;e++)this.modelsData.map(t=>{t[this.displayColumn[e]]=t[this.column[e]]})},n=>{console.error("Error fetching models:",n)})}static \u0275fac=function(e){return new(e||i)(A(D))};static \u0275cmp=C({type:i,selectors:[["app-stock-models"]],decls:7,vars:9,consts:[[2,"padding","5px 5px 0 5px"],["appearance","outline",1,"example-full-width"],["matInput","","placeholder","Search"],[2,"padding-top","5px"],[3,"rowAction","component","tableData","displayColumns","iconHeader","iconColumn","columnData","eventColumn","sortColumn","pagination"]],template:function(e,t){e&1&&(m(0,"div")(1,"div",0)(2,"span")(3,"mat-form-field",1),h(4,"input",2),s()()(),m(5,"div",3)(6,"app-dynamic-table",4),u("rowAction",function(c){return t.rowAction(c)}),s()()()),e&2&&(a(6),r("component","model")("tableData",t.modelsData)("displayColumns",t.displayColumn)("iconHeader",t.iconHeader)("iconColumn",t.iconColumn)("columnData",t.column)("eventColumn",t.eventColumn)("sortColumn",t.sortColumn)("pagination",null))},dependencies:[v,x,q,B],styles:["input[_ngcontent-%COMP%]{padding:5px}"]})};export{re as StockModelsComponent};
