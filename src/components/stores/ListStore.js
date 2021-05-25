import { writable } from 'svelte/store'

const ListStore = writable ([
    [
        { contentText: "First item",
          isChecked: true
        },
        { contentText: "Second item",
          isChecked: false
        },
        { contentText: "Third item",
          isChecked: true
        }
    ],
    [
        { contentText: "Fourth item",
          isChecked: true
        },
        { contentText: "Fifth item",
          isChecked: true
        },
        { contentText: "Sixth item",
          isChecked: true
        }
    ],
    [
        { contentText: "Seventh item",
          isChecked: false
        },
        { contentText: "Eight item",
          isChecked: true
        },
        { contentText: "Ninth item",
          isChecked: true
        }
    ]
])

export default ListStore;