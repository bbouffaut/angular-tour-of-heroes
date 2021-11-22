import * as hero_search_component from "../../../src/app/hero-search.component"
import * as hero_search_service from "../../../src/app/hero-search.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as injector from "@angular/core/src/di/injector"
import * as compiler from "@angular/core/src/linker/compiler"

import * as hero from "../../../src/app/hero"
describe("search", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let object: any
    let inst6: any
    let object2: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_search_service.HeroSearchService(inst2)
        inst4 = new url_tree.UrlSerializer()
        inst5 = new router_outlet_context.ChildrenOutletContexts()
        object = [{ provide: true, multi: undefined, useClass: 56784, deps: ["Software Engineer", "Marketing"] }]
        inst6 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: "/path/to/file", matcher: undefined, component: true, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsOrQueryParamsChange" }, { path: undefined, pathMatch: "C:\\\\path\\to\\file.ext", matcher: undefined, component: true, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsOrQueryParamsChange" }, { path: undefined, pathMatch: "/path/to/file", matcher: undefined, component: true, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsOrQueryParamsChange" }]
        inst7 = new router.Router(56784, inst4, inst5, 987650, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), "a1969970175", inst6, object2)
        inst8 = new hero_search_component.HeroSearchComponent(inst3, inst7)
    })

    test("0", () => {
        let result: any = inst8.search("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.search("DELETE FROM Projects WHERE pid = %s")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst8.search("UNLOCK TABLES;")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst8.search("UPDATE Projects SET pname = %s WHERE pid = %s")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst8.search("")
        expect(result).toMatchSnapshot()
    })
})

describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any
    let object: any
    let inst6: any
    let object2: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_search_service.HeroSearchService(inst2)
        inst4 = new url_tree.UrlSerializer()
        inst5 = new router_outlet_context.ChildrenOutletContexts()
        object = [{ provide: true, multi: true, useValue: true }]
        inst6 = new compiler.Compiler()
        object2 = [{ path: "./path/to/file", pathMatch: "path/to/folder/", matcher: undefined, component: true, redirectTo: "https://twitter.com/path?abc", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "paramsChange" }]
        inst7 = new router.Router(56784, inst4, inst5, 12345, injector.Injector.create(object,undefined), "bc23a9d531064583ace8f67dad60f6bb", inst6, object2)
        inst8 = new hero_search_component.HeroSearchComponent(inst3, inst7)
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
    let inst3: any
    let inst4: any
    let inst5: any
    let object: any
    let inst6: any
    let object2: any
    let inst7: any
    let inst8: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_search_service.HeroSearchService(inst2)
        inst4 = new url_tree.UrlSerializer()
        inst5 = new router_outlet_context.ChildrenOutletContexts()
        object = [{ provide: false, multi: false, deps: undefined }, { provide: false, multi: false, deps: undefined }, { provide: false, multi: false, deps: undefined }]
        inst6 = new compiler.Compiler()
        object2 = [{ path: ".", pathMatch: undefined, matcher: undefined, component: false, redirectTo: "Www.GooGle.com", outlet: "Ergonomic Rubber Bike", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "c466a48309794261b64a4f02cfcc3d64", runGuardsAndResolvers: "paramsOrQueryParamsChange" }, { path: "C:\\\\path\\to\\folder\\", pathMatch: undefined, matcher: undefined, component: false, redirectTo: "ponicode.com", outlet: "Ergonomic Rubber Bike", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "paramsOrQueryParamsChange" }]
        inst7 = new router.Router(12, inst4, inst5, 987650, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), 12345, inst6, object2)
        inst8 = new hero_search_component.HeroSearchComponent(inst3, inst7)
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
