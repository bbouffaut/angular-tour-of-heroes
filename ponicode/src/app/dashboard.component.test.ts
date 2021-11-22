import * as dashboard_component from "../../../src/app/dashboard.component"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as injector from "@angular/core/src/di/injector"
import * as compiler from "@angular/core/src/linker/compiler"
import * as hero_service from "../../../src/app/hero.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

import * as hero from "../../../src/app/hero"
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let object: any
    let inst3: any
    let object2: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new url_tree.UrlSerializer()
        inst2 = new router_outlet_context.ChildrenOutletContexts()
        object = [{ provide: true, multi: true, deps: undefined }, { provide: true, multi: true, deps: undefined }, { provide: false, multi: true, deps: undefined }, { provide: true, multi: true, deps: undefined }, { provide: false, multi: true, deps: undefined }]
        inst3 = new compiler.Compiler()
        object2 = [{ path: "C:\\\\path\\to\\folder\\", pathMatch: undefined, matcher: undefined, component: false, redirectTo: undefined, outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsChange" }, { path: "C:\\\\path\\to\\folder\\", pathMatch: undefined, matcher: undefined, component: false, redirectTo: undefined, outlet: "Ergonomic Rubber Bike", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsChange" }]
        inst4 = new router.Router("a1969970175", inst, inst2, 12345, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), 12345, inst3, object2)
        inst5 = new backend.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new hero_service.HeroService(inst6)
        inst8 = new dashboard_component.DashboardComponent(inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("gotoDetail", () => {
    let inst: any
    let inst2: any
    let object: any
    let inst3: any
    let object2: any
    let inst4: any
    let inst5: any
    let inst6: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new url_tree.UrlSerializer()
        inst2 = new router_outlet_context.ChildrenOutletContexts()
        object = { 0: { provide: true, multi: true, useFactory: () => "Sales", deps: undefined }, 1: { provide: true, multi: true, useFactory: () => "Chief Product Officer", deps: undefined }, 2: { provide: false, multi: true, useFactory: () => "Data Scientist", deps: undefined } }
        inst3 = new compiler.Compiler()
        object2 = [{ path: "path/to/file.ext", pathMatch: "C:\\\\path\\to\\file.ext", matcher: undefined, component: true, redirectTo: "http://base.com", outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "bc23a9d531064583ace8f67dad60f6bb", runGuardsAndResolvers: undefined }, { path: "C:\\\\path\\to\\file.ext", pathMatch: "/path/to/file", matcher: undefined, component: true, redirectTo: "ponicode.com", outlet: "Handmade Fresh Chicken", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "12345", runGuardsAndResolvers: undefined }]
        inst4 = new router.Router(56784, inst, inst2, 12345, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), "a1969970175", inst3, object2)
        inst5 = new backend.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new hero_service.HeroService(inst6)
        inst8 = new dashboard_component.DashboardComponent(inst4, inst7)
    })

    test("0", () => {
        let param1: any = new hero.Hero()
        let result: any = inst8.gotoDetail(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.gotoDetail(null)
        expect(result).toMatchSnapshot()
    })
})
