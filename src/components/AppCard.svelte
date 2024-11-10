<script lang="ts">
	import { Activity, Power, Settings } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	export let name: string;
	export let avatar: string;
	export let description: string;
	export let isOn: boolean;
	export let id: string;

	function navigateToBot() {
		goto(`/apps/${id}`);
	}
</script>

<div class="rounded-lg border border-zinc-800 flex gap-4 items-center p-4 bg-card-darker">
	<div>
		<img src={avatar} alt="Avatar" class="size-10 rounded-full" />
	</div>
	<div class="flex-1">
		<button class="appTitle" on:click={navigateToBot}>{name}</button>
		<p class="cap">{description}</p>
	</div>
	<div class="flex gap-2 items-center">
		<button class="group">
			{#if isOn}
				<Activity class="text-primary group-hover:text-green-500/70 animate-pulse" />
			{:else}
				<Activity class="text-red-500 group-hover:text-red-500/70" />
			{/if}
		</button>
		<button class="group">
			<Power class="group-hover:text-zinc-500 transition-all" />
		</button>
		<button class="group">
			<Settings class="group-hover:text-zinc-500 transition-all" />
		</button>
	</div>
</div>
