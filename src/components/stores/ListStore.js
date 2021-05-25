import { writable } from 'svelte/store'

const ListStore = writable ([
    { check: true },
    { check: false },
    { check: true }
])

export default ListStore;