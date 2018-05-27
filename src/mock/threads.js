import loremIpsum from '@npm/lorem-ipsum'

const threads = [{
    created: '2018-05-27T17:22:17+00:00',
    title: 'Mock Thread 1',
    content: '',
    author: 'testUser1',
    board: '',
    slug: 'mock-thread-1',
    key: 'ae498'
}, {
    created: '2018-05-27T17:22:17+00:00',
    title: 'Mock Thread 2',
    content: '',
    author: 'testUser2',
    board: '',
    slug: 'mock-thread-2',
    key: 'ae498'
}, {
    created: '2018-05-27T17:22:17+00:00',
    title: 'Mock Thread 3',
    content: '',
    author: 'testUser3',
    board: '',
    slug: 'mock-thread-3',
    key: 'ae498'
}, {
    created: '2018-05-27T17:22:17+00:00',
    title: 'Mock Thread 4',
    content: '',
    author: 'testUser4',
    board: '',
    slug: 'mock-thread-4',
    key: 'ae498'
}, {
    created: '2018-05-27T17:22:17+00:00',
    title: 'Mock Thread 5',
    content: '',
    author: 'testUser5',
    board: '',
    slug: 'mock-thread-5',
    key: 'ae498'
}]

threads.forEach(thread => thread.content = loremIpsum({
    count: 256,
    units: 'words'
}))

export default threads