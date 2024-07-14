import { writable } from 'svelte/store';

export let page = writable(1);
export let examplePage = writable(1);
export let list = [{}];
