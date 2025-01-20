<script lang="ts">
	import '../app.css';
	import logo from '$lib/images/logo.svg';

	let { children } = $props();
</script>

<header class="mx-auto w-full max-w-4xl">
	<nav class="flex items-center justify-between py-3">
		<span>
			<a href="/" class="text-primary hover:text-primary-light">
			<img src={logo} alt="SvelteFlix" class="h-6" />
			</a>
		</span>
		<span class="flex gap-4">
			<a href="/about" class="text-primary hover:text-primary-light">Search</a>
			<a href="/about" class="text-primary hover:text-primary-light">Watch List</a>
			<a href="/about" class="text-primary hover:text-primary-light">Logout</a>
		</span>
	</nav>
</header>
<main class="mx-auto w-full max-w-4xl">
	{@render children()}
</main>
<footer class="mx-auto w-full max-w-4xl">
&copy; Copyright 2025
</footer>