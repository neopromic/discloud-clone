<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft, Home } from 'lucide-svelte';
	import { goto } from '$app/navigation';
</script>

<div class="min-h-screen flex items-center justify-center px-4 py-6">
	<div class="text-center space-y-8 max-w-2xl">
		<!-- Ilustração do unDraw -->
		<img
			src="/404.svg"
			alt="Error Illustration"
			class="w-full max-w-md mx-auto"
			style="filter: invert(1) hue-rotate(180deg)"
		/>

		<div class="space-y-4">
			<h1 class="text-4xl font-bold tracking-tight">Oops! Página não encontrada</h1>
			<p class="text-muted-foreground text-lg">
				{#if $page.status === 404}
					Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
				{:else if $page.error?.message}
					{$page.error.message}
				{:else}
					Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.
				{/if}
			</p>
		</div>

		<div class="flex items-center justify-center gap-4">
			<Button variant="outline" class="gap-2" on:click={() => history.back()}>
				<ArrowLeft size={16} />
				Voltar
			</Button>
			<Button class="gap-2" on:click={() => goto('/')}>
				<Home size={16} />
				Página Inicial
			</Button>
		</div>
	</div>
</div>

<style>
	:global(footer) {
		display: none !important;
	}
</style>
