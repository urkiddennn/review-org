<script>
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-tomorrow.css'; // Import the CSS for Prism
	import 'prismjs/components/prism-python';

	let code = `
def main():
    arr = [32, 23, 3, 12, 43]
    arr_count = len(arr)

    for i in range(arr_count):#i=5
        for j in range(arr_count - 1):#range(5 - 1) 
            if arr[j] > arr[j + 1]:#if the arr[32] > arr[23]
                arr[j], arr[j + 1] = arr[j + 1], arr[j] #set the arr[32] = arr[23], arr[23] = arr[32]. arr = [23,32]
                print(arr[j], arr[j+1])

    print(arr)

main()
`;

	let ouput = `
32 23
32 3
32 12
32 43
23 3
23 12
23 43
12 3
12 23
3 12
3 23
	`;

	function copyCode() {
		const codeElement = document.querySelector('pre code');
		const range = document.createRange();
		range.selectNode(codeElement);
		window.getSelection().removeAllRanges(); // Clear any previous selection
		window.getSelection().addRange(range); // Select the text

		try {
			const successful = document.execCommand('copy');
			if (successful) {
				alert('Code copied to clipboard!');
			} else {
				alert('Failed to copy code.');
			}
		} catch (err) {
			alert('Failed to copy code.');
		}

		window.getSelection().removeAllRanges(); // Deselect the text
	}

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<article class="p-32 h-auto overflow-y-auto">
	<h2 class="text-3xl">What is Sorting?</h2>
	<p class="line-clamp-3">
		A Sorting Algorithm is used to rearrange a given array or list of elements according to a
		comparison operator on the elements. The comparison operator is used to decide the new order of
		elements in the respective data structure.
	</p>
	<br />

	<p class="text-gray-700">Example Array code</p>

	<pre class="bg-gray-700 border-gray-900 rounded-lg border flex wrap relative">
        <button
			on:click={copyCode}
			class="mt-4 p-2 text-white rounded w-10 h-10 absolute right-3 top-0"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 fill-gray-50"
				><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
				/></svg
			></button
		>
        <code class="language-python" style="font-size: 10px;">
            {code}
        </code>
    </pre>
	<p>
		The outer loop <span class=" bg-gray-600 p-1 rounded-md">(for i in range(arr_count))</span>
		iterates over each element in the array. The inner loop
		<span class=" bg-gray-600 p-1 rounded-md"> (for j in range(arr_count - 1))</span>
		iterates from the first element to the second-to-last element of the array. Inside the inner loop,
		the condition if <span class=" bg-gray-600 p-1 rounded-md"> arr[j] > arr[j + 1]</span>
		checks if the current element is greater than the next element. If true, it swaps the elements using
		tuple unpacking:
		<span class=" bg-gray-600 p-1 rounded-md">arr[j], arr[j + 1] = arr[j + 1], arr[j].</span> During
		the sorting process, it prints the elements that are swapped.
	</p>
	<p class="text-gray-700">Output</p>

	<pre class="bg-gray-700 border-gray-900 rounded-lg border flex wrap relative">
        <button
			on:click={copyCode}
			class="mt-4 p-2 text-white rounded w-10 h-10 absolute right-3 top-0"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 fill-gray-50"
				><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
				/></svg
			></button
		>
        <code class="language-python" style="font-size: 10px;">
            {ouput}
        </code>
    </pre>
</article>

<style>
	.mt-4 {
		margin-top: 1rem;
	}

	.p-2 {
		padding: 0.5rem;
	}

	.bg-blue-500 {
		background-color: #3b82f6;
	}

	.text-white {
		color: #ffffff;
	}

	.rounded {
		border-radius: 0.25rem;
	}
</style>
