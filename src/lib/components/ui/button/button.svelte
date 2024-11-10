<script lang="ts">
	import { cn } from '$lib/utils';
	import { buttonVariants, type ButtonVariants } from './variants';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type $$Props = HTMLButtonAttributes & {
		variant?: ButtonVariants;
		size?: 'default' | 'sm' | 'lg' | 'icon';
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export { className as class };
</script>

<button class={cn(buttonVariants({ variant, size, className }))} {...$$restProps} on:click>
	<slot />
</button>
