import { atom } from 'recoil'

export const allBookingState = atom({
    key: 'allBookingState',
    default: []
})

export const todayBookingState = atom({
    key: 'todayBookingState',
    default: []
})

export const noAssignedBookingState = atom({
    key: 'noAssignBookingState',
    default: []
})

export const tableState = atom({
    key: 'tableState',
    default: []
})

export const optionDispState = atom({
    key: 'optionDispState',
    default: {
        delete: false,
        edit: false,
        addTable: false,
        removeTable: false,
        moveTable: false,
    }
})

export const buttonDispState = atom({
    key: 'buttonDispState',
    default: {
        delete: false,
        edit: false,
        addTable: false,
        removeTable: false,
        moveTable: false,
    }
})

export const dateState = atom({
    key: "dateState",
    default: ""
})

export const hourState = atom({
    key: "hourState",
    default: "18"
})

export const minuteState = atom({
    key: "minuteState",
    default: "00"
})

export const nameState = atom({
    key: "nameState",
    default: ""
})

export const numberOfAdultsState = atom({
    key: "numberOfAdultsState",
    default: "2"
})

export const numberOfChildrenState = atom({
    key: "numberOfChildrenState",
    default: "0"
})

export const bookingCategoryIdState = atom({
    key: "bookingCategoryState",
    default: "1"
})

export const tableIdState = atom({
    key: "tableIdState",
    default: ""
})

export const noteState = atom({
    key: "noteState",
    default: ""
})
