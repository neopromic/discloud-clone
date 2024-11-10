<script lang="ts">
	import { FileText } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	export let name: string;
	export let extension: string;
	export let selected = false;

	const iconColors = {
		js: 'text-yellow-500/80',
		ts: 'text-blue-500/80',
		json: 'text-green-500/80',
		md: 'text-gray-500/80',
		css: 'text-pink-500/80',
		html: 'text-orange-500/80',
		py: 'text-blue-400/80',
		java: 'text-red-500/80',
		php: 'text-purple-500/80'
	} as Record<string, string>;

	$: iconColor = iconColors[extension] || 'text-gray-500/80';
</script>

<div
	class={cn(
		'flex items-center gap-2 hover:bg-card/50 p-2 rounded-sm cursor-pointer transition-colors',
		selected && 'bg-card/50'
	)}
>
	<FileText size={16} class={cn(iconColor)} />
	<span class="text-sm text-muted-foreground hover:text-foreground transition-colors">{name}</span>
</div>
