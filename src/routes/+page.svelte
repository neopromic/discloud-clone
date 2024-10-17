<script lang="ts">
	import Tabs from '../components/TabsInfo.svelte';
	import BreadcrumbHome from '../components/BreadcrumbHome.svelte';
	import Header from '../components/Header.svelte';
	import { Plus, User, Package, Github } from 'lucide-svelte';
</script>

<main class="h-[calc(100dvh-3rem)]">
	<Header />
	<section class="px-4 lg:px-12 space-y-4">
		<BreadcrumbHome />
		<div class="flex justify-between">
			<h2 class="text-2xl">Workspace</h2>
			<button
				class="uppercase text-lg bg-[#4f5ad9] rounded-md flex gap-2 items-center px-2 font-bold"
			>
				<Plus size={18} strokeWidth={1.5} />
				Add App
			</button>
		</div>
		<section class="rounded-md bg-card min-h-64 p-4">
			<div class="flex justify-between">
				<img src="https://github.com/neopromic.png" alt="Avatar" class="size-24 rounded-full" />
				<div class="flex-1 px-6 items-center">
					<p class="text-2xl font-bold">neopromic</p>
					<p class="text-muted-foreground flex gap-2 items-center font-semibold">
						<User size={16} class="fill-muted-foreground" /> ID: 621323075614408711
					</p>
					<p class="text-stone-700/70 flex gap-2 items-center font-semibold">
						<Github size={16} class="fill-stone-700/70" /> 65511208
						<a class="underline text-stone-400" href="/"> Vincular outra conta </a>
					</p>
				</div>
				<div class="text-muted-foreground">
					<p
						class="font-semibold text-white flex gap-2 items-center pointer-events-none select-none"
					>
						<Package size={16} />
						Recursos
					</p>
					<p>100 MB RAM</p>
					<p>0.25 vCPUs</p>
				</div>
			</div>
			<div class="relative">
				<Tabs />
			</div>
		</section>
		<footer class="mt-12">
			<img src="/logo.svg" alt="discloud_logo" width="170" class="grayscale" />
		</footer>
	</section>
</main>
