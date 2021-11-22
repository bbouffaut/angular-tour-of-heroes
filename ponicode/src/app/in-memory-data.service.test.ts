import * as in_memory_data_service from "../../../src/app/in-memory-data.service"
// @ponicode
describe("createDb", () => {
    let inst: any

    beforeEach(() => {
        inst = new in_memory_data_service.InMemoryDataService()
    })

    test("0", () => {
        let result: any = inst.createDb()
        expect(result).toMatchSnapshot()
    })
})
