import * as hero_service from "../../../src/app/hero.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

import * as hero from "../../../src/app/hero"
describe("getHeroes", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getHeroes()
        expect(result).toMatchSnapshot()
    })
})

describe("getHero", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
    })

    test("0", () => {
        let result: any = inst3.getHero(100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.getHero(0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.getHero(-100)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.getHero(1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.getHero(-5.48)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.getHero(NaN)
        expect(result).toMatchSnapshot()
    })
})

describe("save", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
    })

    test("0", () => {
        let param1: any = new hero.Hero()
        let result: any = inst3.save(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.save(null)
        expect(result).toMatchSnapshot()
    })
})

describe("delete", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
    })

    test("0", () => {
        let param1: any = new hero.Hero()
        let result: any = inst3.delete(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.delete(null)
        expect(result).toMatchSnapshot()
    })
})

describe("post", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
    })

    test("0", () => {
        let param1: any = new hero.Hero()
        let result: any = inst3.post(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.post(null)
        expect(result).toMatchSnapshot()
    })
})

describe("put", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
    })

    test("0", () => {
        let param1: any = new hero.Hero()
        let result: any = inst3.put(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.put(null)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("handleError", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_service.HeroService(inst2)
    })

    test("0", () => {
        let result: any = inst3.handleError({ error: "Server error", body: { error: "error" } })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.handleError({ error: "Server error", body: { error: "Message box: foo; bar\n" } })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.handleError({ error: "Server error", body: { error: "ValueError" } })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.handleError({ error: "Server error", body: { error: "multiple errors occurred" } })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.handleError({ error: "Server error", body: { error: "invalid choice" } })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst3.handleError({ error: "", body: { error: "" } })
        expect(result).toMatchSnapshot()
    })
})
