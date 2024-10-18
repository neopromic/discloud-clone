<script lang="ts">
	// biome-ignore lint/style/useImportType: <explanation>
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = TabsPrimitive.ListProps;

	// biome-ignore lint/style/useConst: <explanation>
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<TabsPrimitive.List
	class={cn(
		'bg-muted text-muted-foreground flex h-10 w-full	 items-center justify-center rounded-md p-1',
		className
	)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.List>
