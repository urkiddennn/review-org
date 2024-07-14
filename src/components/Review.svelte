<script>
	import About from './example/About.svelte';
	import Array from './example/array.svelte';
	import BoxWithBorder from './example/boxWithBorder.svelte';
	import Sorting from './example/Sorting.svelte';
	import { examplePage, page } from './store/data';
	import { writable } from 'svelte/store';

	let currentPage = 1;
	let Home = 1;
	function changeArray() {
		currentPage = 1;
		examplePage.set(currentPage);
	}
	function changeSort() {
		currentPage = 2;
		examplePage.set(currentPage);
	}
	function changePattern() {
		currentPage = 3;
		examplePage.set(currentPage);
	}
	function changeAbout() {
		currentPage = 4;
		examplePage.set(currentPage);
	}
	function goHome() {
		page.set(1);
	}
</script>

{#if Home === 2}
	<Home />
{:else}
	<div class="w-full h-full flex justify-center items-center">
		<div class="w-1/4 h-full flex flex-col items-center border-r-2 p-10 justify-between">
			<ul class=" text-sm">
				<li><h1>Content</h1></li>
				<li>
					<a href="/" class=" cursor-pointer hover:underline" on:click={changeArray}>
						Array Example</a
					>
				</li>
				<li>
					<a href="/" class=" cursor-pointer hover:underline" on:click={changeSort}>
						Sort Array Example</a
					>
				</li>
				<li>
					<a href="/" class=" cursor-pointer hover:underline" on:click={changePattern}
						>Pattern Printing</a
					>
				</li>
				<li>
					<a href="/" class=" cursor-pointer hover:underline mt-10" on:click={changeAbout}>About</a>
				</li>
			</ul>
			<button
				class="w-full md:bg-gray-700 bg-gray-50 p-2 flex justify-between items-center"
				on:click={goHome}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 fill-gray-50"
					><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
						d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
					/></svg
				>
				<p class=" md:text-gray-50 text-gray-800">Go back</p>
			</button>
		</div>

		<div class="w-3/4 h-full flex flex-col justify-center">
			{#if $examplePage == 1}
				<Array />
			{:else if $examplePage === 2}
				<Sorting />
			{:else if $examplePage === 3}
				<BoxWithBorder />
			{:else if $examplePage == 4}
				<About />
			{/if}
		</div>
	</div>
{/if}
