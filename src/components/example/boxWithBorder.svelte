<script>
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-tomorrow.css'; // Import the CSS for Prism
	import 'prismjs/components/prism-python';

	let code = `
def box_with_border():
    range_value = 10

    for i in range(1, range_value + 1):#0 is the start so 9 + 1, i = 1
        for j in range(1, range_value + 1):
            if i == 1 or i == range_value or j == 1 or j == range_value:
                print("+", end="")# print whole 10 since it meets the condtion
            else:
                print(" ", end="")
        print()

box_with_border()


`;
	let ouputOne = `
++++++++++
+        +
+        +
+        +
+        +
+        +
+        +
+        +
+        +
++++++++++

`;
	let code2 = `
def box_pattern():
    x = int(input("box number: "))

    for i in range(1, x + 1):
        for j in range(1, x + 1):
            print("*", end="")
        print()

box_pattern()
`;
	let userInput = `
box number: 5
`;
	let output = `
*****
*****
*****
*****
*****
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
	<h2 class="text-3xl">A Simple Pattern Printing</h2>
	<p class="line-clamp-3">This is a bunch of printing pattern with code</p>
	<br />
	<h2>Box with border</h2>
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
		The outer loop <span class=" bg-gray-600 p-1 rounded-md"
			>(for i in range(1, range_value + 1))</span
		>
		iterates over the rows. The inner loop
		<span class=" bg-gray-600 p-1 rounded-md">(for j in range(1, range_value + 1))</span> iterates over
		the columns. The condition if i == 1 or i == range_value or j == 1 or j == range_value checks if
		the current position is at the border of the box. If the condition is met, it prints a + character;
		otherwise, it prints a space. After each row is printed, a newline is added with print().
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
            {ouputOne}
        </code>
    </pre>
	<h2>Box</h2>
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
            {code2}
        </code>
    </pre>
	<p>
		The function first prompts the user to enter a number (x), which determines the size of the
		square pattern. It then uses two nested for loops to iterate through each row and column up to
		x. Inside the nested loops, it prints * using <span class=" bg-gray-600 p-1 rounded-md"
			>print("*", end="")</span
		> to ensure all * characters in a row are printed on the same line. After printing all * characters
		for a row (j loop completes), it moves to the next line using print() to start a new row (i loop).
	</p>
	<p class="text-gray-700">User input</p>
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
