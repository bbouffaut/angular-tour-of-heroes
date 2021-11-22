import * as heroes_component from "../../../src/app/heroes.component"
import * as router from "@angular/router"
import * as url_tree from "@angular/router/src/url_tree"
import * as router_outlet_context from "@angular/router/src/router_outlet_context"
import * as injector from "@angular/core/src/di/injector"
import * as compiler from "@angular/core/src/linker/compiler"
import * as hero_service from "../../../src/app/hero.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

import * as hero from "../../../src/app/hero"
describe("getHeroes", () => {
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
        object = { 0: { provide: true, multi: true, useFactory: () => "Sales", deps: undefined }, 1: { provide: true, multi: true, useFactory: () => "Chief Product Officer", deps: undefined }, 2: { provide: false, multi: true, useFactory: () => "Marketing", deps: undefined } }
        inst3 = new compiler.Compiler()
        object2 = [{ path: ".", pathMatch: ".", matcher: undefined, component: false, redirectTo: "http://base.com", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "12345", runGuardsAndResolvers: undefined }, { path: "path/to/file.ext", pathMatch: "/path/to/file", matcher: undefined, component: false, redirectTo: "http://www.example.com/route/123?foo=bar", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: undefined }]
        inst4 = new router.Router(12, inst, inst2, 12345, injector.Injector.create(object,undefined), 56784, inst3, object2)
        inst5 = new backend.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new hero_service.HeroService(inst6)
        inst8 = new heroes_component.HeroesComponent(inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.getHeroes()
        expect(result).toMatchSnapshot()
    })
})

describe("addHero", () => {
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
        object = [{ provide: true, multi: false, useExisting: "9876" }, { provide: true, multi: false, useExisting: "12345" }, { provide: false, multi: false, useExisting: "12345" }, { provide: true, multi: false, useExisting: "da7588892" }]
        inst3 = new compiler.Compiler()
        object2 = [{ path: ".", pathMatch: "path/to/folder/", matcher: undefined, component: false, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: undefined }, { path: "C:\\\\path\\to\\folder\\", pathMatch: "path/to/folder/", matcher: undefined, component: false, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: undefined }, { path: ".", pathMatch: "C:\\\\path\\to\\file.ext", matcher: undefined, component: true, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: undefined }]
        inst4 = new router.Router("a1969970175", inst, inst2, 987650, injector.Injector.create({ providers: object, parent: undefined, name: "Anas" }), 12, inst3, object2)
        inst5 = new backend.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new hero_service.HeroService(inst6)
        inst8 = new heroes_component.HeroesComponent(inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.addHero()
        expect(result).toMatchSnapshot()
    })
})

describe("close", () => {
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
        object = [["[\"a\", \"b\", \"043\", \"holasenior\"]", "[\"a\", \"b\", \"043\", \"holasenior\"]"], ["[-1, 0.5, 1, 2, 3, 4, 5]", "[10, -45.9, 103.5, 0.955674]"]]
        inst3 = new compiler.Compiler()
        object2 = [{ path: ".", pathMatch: "./path/to/file", matcher: undefined, component: false, redirectTo: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "12345", runGuardsAndResolvers: "paramsOrQueryParamsChange" }, { path: ".", pathMatch: "C:\\\\path\\to\\folder\\", matcher: undefined, component: false, redirectTo: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "paramsOrQueryParamsChange" }, { path: "C:\\\\path\\to\\file.ext", pathMatch: "./path/to/file", matcher: undefined, component: true, redirectTo: "https://croplands.org/app/a/reset?token=", outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "paramsOrQueryParamsChange" }]
        inst4 = new router.Router(12, inst, inst2, 12, injector.Injector.create(object,undefined), 56784, inst3, object2)
        inst5 = new backend.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new hero_service.HeroService(inst6)
        inst8 = new heroes_component.HeroesComponent(inst4, inst7)
    })

    test("0", () => {
        let param1: any = new hero.Hero()
        let result: any = inst8.close(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.close(null)
        expect(result).toMatchSnapshot()
    })
})

describe("deleteHero", () => {
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
        object = [["Software Engineer", "Marketing", "Chief Product Officer"], ["Marketing", "Software Engineer", "Software Engineer"], ["Data Scientist", "Data Scientist", "Software Engineer"], ["Marketing", "Sales", "Marketing"]]
        inst3 = new compiler.Compiler()
        object2 = [{ path: "C:\\\\path\\to\\file.ext", pathMatch: "/path/to/file", matcher: undefined, component: false, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsChange" }, { path: "C:\\\\path\\to\\folder\\", pathMatch: "C:\\\\path\\to\\folder\\", matcher: undefined, component: true, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsChange" }, { path: "C:\\\\path\\to\\folder\\", pathMatch: "C:\\\\path\\to\\folder\\", matcher: undefined, component: false, redirectTo: undefined, outlet: undefined, canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: undefined, runGuardsAndResolvers: "paramsChange" }]
        inst4 = new router.Router("bc23a9d531064583ace8f67dad60f6bb", inst, inst2, 56784, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), "a1969970175", inst3, object2)
        inst5 = new backend.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new hero_service.HeroService(inst6)
        inst8 = new heroes_component.HeroesComponent(inst4, inst7)
    })

    test("0", () => {
        let param1: any = new hero.Hero()
        let result: any = inst8.deleteHero(param1, { stopPropagation: () => 1.0 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new hero.Hero()
        let result: any = inst8.deleteHero(param1, { stopPropagation: () => -0.5 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new hero.Hero()
        let result: any = inst8.deleteHero(param1, { stopPropagation: () => 0.5 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new hero.Hero()
        let result: any = inst8.deleteHero(param1, { stopPropagation: () => 10.0 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new hero.Hero()
        let result: any = inst8.deleteHero(param1, { stopPropagation: () => -29.45 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new hero.Hero()
        let result: any = inst8.deleteHero(param1, { stopPropagation: () => Infinity })
        expect(result).toMatchSnapshot()
    })
})

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
        object = { 0: { provide: false, multi: false, useFactory: () => "Chief Product Officer", deps: undefined }, 1: { provide: false, multi: false, useFactory: () => "Data Scientist", deps: undefined }, 2: { provide: true, multi: false, useFactory: () => "Software Engineer", deps: undefined }, 3: { provide: false, multi: false, useFactory: () => "Sales", deps: undefined }, 4: { provide: true, multi: false, useFactory: () => "Software Engineer", deps: undefined } }
        inst3 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: ".", matcher: undefined, component: true, redirectTo: undefined, outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "12345", runGuardsAndResolvers: "paramsOrQueryParamsChange" }]
        inst4 = new router.Router(56784, inst, inst2, 987650, injector.Injector.create({ providers: object, parent: undefined, name: "Pierre Edouard" }), "a1969970175", inst3, object2)
        inst5 = new backend.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new hero_service.HeroService(inst6)
        inst8 = new heroes_component.HeroesComponent(inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("onSelect", () => {
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
        object = { 0: { provide: true, multi: false, useFactory: () => "Data Scientist", deps: undefined }, 1: { provide: false, multi: false, useFactory: () => "Sales", deps: undefined }, 2: { provide: false, multi: false, useFactory: () => "Chief Product Officer", deps: undefined }, 3: { provide: true, multi: false, useFactory: () => "Chief Product Officer", deps: undefined } }
        inst3 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: "C:\\\\path\\to\\folder\\", matcher: undefined, component: true, redirectTo: "https://croplands.org/app/a/confirm?t=", outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "paramsChange" }, { path: undefined, pathMatch: "path/to/file.ext", matcher: undefined, component: true, redirectTo: "Www.GooGle.com", outlet: "Ergonomic Rubber Bike", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "12345", runGuardsAndResolvers: "paramsChange" }, { path: undefined, pathMatch: "C:\\\\path\\to\\folder\\", matcher: undefined, component: true, redirectTo: "https://croplands.org/app/a/confirm?t=", outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "paramsChange" }, { path: undefined, pathMatch: "C:\\\\path\\to\\folder\\", matcher: undefined, component: true, redirectTo: "www.google.com", outlet: "Ergonomic Rubber Bike", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "da7588892", runGuardsAndResolvers: "paramsChange" }, { path: undefined, pathMatch: "./path/to/file", matcher: undefined, component: true, redirectTo: "https://api.telegram.org/bot", outlet: "Handmade Fresh Chicken", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "c466a48309794261b64a4f02cfcc3d64", runGuardsAndResolvers: "paramsChange" }]
        inst4 = new router.Router(12345, inst, inst2, "bc23a9d531064583ace8f67dad60f6bb", injector.Injector.create(object,undefined), "a1969970175", inst3, object2)
        inst5 = new backend.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new hero_service.HeroService(inst6)
        inst8 = new heroes_component.HeroesComponent(inst4, inst7)
    })

    test("0", () => {
        let param1: any = new hero.Hero()
        let result: any = inst8.onSelect(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst8.onSelect(null)
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
        object = [{ provide: false, multi: false, useClass: 12, deps: ["Marketing"] }]
        inst3 = new compiler.Compiler()
        object2 = [{ path: undefined, pathMatch: undefined, matcher: undefined, component: false, redirectTo: "https://api.telegram.org/", outlet: "Ergonomic Rubber Bike", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "9876", runGuardsAndResolvers: "always" }, { path: undefined, pathMatch: undefined, matcher: undefined, component: false, redirectTo: "https://twitter.com/path?abc", outlet: "Small Cotton Chips", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "bc23a9d531064583ace8f67dad60f6bb", runGuardsAndResolvers: "always" }, { path: undefined, pathMatch: undefined, matcher: undefined, component: true, redirectTo: "https://croplands.org/app/a/confirm?t=", outlet: "Refined Frozen Pizza", canActivate: undefined, canActivateChild: undefined, canDeactivate: undefined, canLoad: undefined, data: undefined, resolve: undefined, children: undefined, loadChildren: "bc23a9d531064583ace8f67dad60f6bb", runGuardsAndResolvers: "always" }]
        inst4 = new router.Router(987650, inst, inst2, 12345, injector.Injector.create({ providers: object, parent: undefined, name: undefined }), "a1969970175", inst3, object2)
        inst5 = new backend.HttpHandler()
        inst6 = new http.HttpClient(inst5)
        inst7 = new hero_service.HeroService(inst6)
        inst8 = new heroes_component.HeroesComponent(inst4, inst7)
    })

    test("0", () => {
        let result: any = inst8.gotoDetail()
        expect(result).toMatchSnapshot()
    })
})
