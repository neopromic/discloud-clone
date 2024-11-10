<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined = undefined;
	export { className as class };
</script>

<div class={cn('rounded-lg border bg-card-darker text-card-foreground h-full', className)}>
	<div class="p-4">
		<slot />
	</div>
</div>
