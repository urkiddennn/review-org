<script>
	import Home from '../components/Home.svelte';
	import Review from '../components/Review.svelte';
	import Theme_Toggle from '../components/Theme_Toggle.svelte';
	import { page } from '../components/store/data';
</script>

<main
	class="w-full h-screen flex md:flex-row justify-center items-center relative flex-col-reverse"
>
	<a
		href="https://www.facebook.com/Urkidden"
		class=" z-10 absolute right-1 bottom-1 md:right-10 md:bottom-10 flex gap-2 justify-center items-center text-gray-50 border rounded-lg p-2"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 fill-blue-500"
			><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
				d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"
			/></svg
		>
		Message me
	</a>
	<Theme_Toggle />
	{#if $page == 1}
		<Home />
	{:else}
		<Review />
	{/if}
</main>

<style lang="postcss">
	/* Import Tailwind CSS and define initial theme  WEX4MS3JW38C44ZT6W394DQN*/

	/* Set initial theme */
	:global(.body-light) {
		background-color: #ffffff;
		color: #333333;
	}

	:global(.body-dark) {
		background-color: #1f2937;
		color: #ffffff;
	}
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
