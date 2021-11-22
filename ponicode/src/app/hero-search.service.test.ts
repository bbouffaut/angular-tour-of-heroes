import * as hero_search_service from "../../../src/app/hero-search.service"
import * as http from "@angular/common/http"
import * as backend from "@angular/common/http/src/backend"

describe("search", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new backend.HttpHandler()
        inst2 = new http.HttpClient(inst)
        inst3 = new hero_search_service.HeroSearchService(inst2)
    })

    test("0", () => {
        let result: any = inst3.search("da7588892")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst3.search("bc23a9d531064583ace8f67dad60f6bb")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst3.search("c466a48309794261b64a4f02cfcc3d64")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst3.search("9876")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst3.search("")
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
        inst3 = new hero_search_service.HeroSearchService(inst2)
    })

    test("0", () => {
        let param1: any = new http.HttpErrorResponse({ error: "too many arguments", headers: undefined, status: undefined, statusText: "rss", url: "www.google.com" })
        let result: any = inst3.handleError(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1: any = new http.HttpErrorResponse({ error: "error", headers: undefined, status: undefined, statusText: "esa", url: "http://base.com" })
        let result: any = inst3.handleError(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1: any = new http.HttpErrorResponse({ error: "error", headers: undefined, status: 429, statusText: "esa", url: undefined })
        let result: any = inst3.handleError(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1: any = new http.HttpErrorResponse({ error: "multiple errors occurred", headers: undefined, status: 404, statusText: "rss", url: "https://twitter.com/path?abc" })
        let result: any = inst3.handleError(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1: any = new http.HttpErrorResponse({ error: "error", headers: undefined, status: 404, statusText: "wad", url: undefined })
        let result: any = inst3.handleError(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param1: any = new http.HttpErrorResponse({ error: "", headers: undefined, status: undefined, statusText: "", url: "" })
        let result: any = inst3.handleError(param1)
        expect(result).toMatchSnapshot()
    })
})
