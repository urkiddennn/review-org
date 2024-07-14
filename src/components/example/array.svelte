<script>
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-tomorrow.css'; // Import the CSS for Prism
	import 'prismjs/components/prism-python';

	let code = `
def main():
    marks = []
    n = int(input("Enter number of marks (must not be greater than 5): "))

    if n > 5:
        print("Number of marks must not be greater than 5")
        return #operation stop when met the condition

    sum_marks = 0

    for i in range(n):
        mark = int(input("Enter mark: "))
        marks.append(mark)
        sum_marks += mark

    average = sum_marks / n
    print("Average: ",average)

main()
`;
	let userInput = `
Enter number of marks (must not be greater than 5): 3
Enter mark: 80
Enter mark: 90
Enter mark: 70
`;
	let output = `
Average:  80.0
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
	<h2 class="text-3xl">What is Array?</h2>
	<p class="line-clamp-3">
		Array is a linear data structure where all elements are arranged sequentially. It is a
		collection of elements of same data type stored at contiguous memory locations.
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
	<p class="text-gray-700">User Input</p>
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
            {userInput}
        </code>
    </pre>
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
            {output}
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
