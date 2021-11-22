import * as hero_detail_component from "../../../src/app/hero-detail.component"
import * as hero_service from "../../../src/app/hero.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"
import * as router from "@angular/router"

import * as hero from "../../../src/app/hero"
describe("ngOnInit", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new hero_detail_component.HeroDetailComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})

describe("goBack", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new hero_detail_component.HeroDetailComponent(inst3, inst4)
    })

    test("0", () => {
        let param1: any = new hero.Hero()
        let result: any = inst5.goBack(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst5.goBack(null)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
        inst4 = new router.ActivatedRoute()
        inst5 = new hero_detail_component.HeroDetailComponent(inst3, inst4)
    })

    test("0", () => {
        let result: any = inst5.save()
        expect(result).toMatchSnapshot()
    })
})
