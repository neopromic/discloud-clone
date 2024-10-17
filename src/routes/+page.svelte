<script lang="ts">
	import BreadcrumbHome from '../components/BreadcrumbHome.svelte';
	import Header from '../components/Header.svelte';
	import { Plus } from "lucide-svelte"

</script>

<main class="h-[calc(100dvh-3rem)]">
	<Header />
	<section class="px-4 lg:px-12 space-y-4">
		<BreadcrumbHome />
		<div class="flex justify-between">

			<h2 class="text-2xl">Workspace</h2>
			<button class="uppercase text-lg bg-[#4f5ad9] rounded-md flex gap-2 items-center px-2">
				<Plus size={18} strokeWidth={1.5} />
				Add App
			</button>
		</div>
		<section class="rounded-md bg-card min-h-64 p-4">
			<div class="flex justify-between">
				<img src="https://github.com/neopromic.png" alt="Avatar" class="size-24 rounded-full">
				<div class="flex-1">
					<p class="text-2xl font-bold">neopromic</p>
				</div>
			</div>
		</section>
	</section>
</main>
