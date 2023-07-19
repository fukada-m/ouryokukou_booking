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


