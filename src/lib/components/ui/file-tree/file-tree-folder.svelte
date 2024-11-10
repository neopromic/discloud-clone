<script lang="ts">
	import { ChevronRight, Folder as FolderIcon } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils';

	export let name: string;
	export let expanded = false;

	function toggle() {
		expanded = !expanded;
	}
</script>

<div>
	<button
		class="flex items-center gap-2 w-full hover:bg-card/50 p-2 rounded-sm transition-colors"
		on:click={toggle}
	>
		<ChevronRight
			size={16}
			class={cn('transition-transform duration-200 text-foreground', expanded && 'rotate-90')}
		/>
		<FolderIcon size={16} class="text-yellow-500/80" />
		<span class="text-sm font-medium text-foreground">{name}</span>
	</button>

	{#if expanded}
		<div class="ml-4 pl-2 border-l border-border" transition:slide|local={{ duration: 150 }}>
			<slot />
		</div>
	{/if}
</div>
