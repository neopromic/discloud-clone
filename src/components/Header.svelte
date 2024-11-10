<script lang="ts">
	import { Package, Bot, Globe, Download, ChevronDown } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	const svgUrl = '/logo.svg';
</script>

<header
	class="sticky top-0 left-0 py-4 lg:px-12 px-4 bg-background/80 backdrop-blur-md flex justify-between items-center"
>
	<img src={svgUrl} alt="Discloud Logo" width="170" />
	<nav class="lg:flex items-center gap-4 hidden">
		<ul class="flex gap-6">
			<li class="text-foreground hover:text-primary transition-all">
				<a href="/">Planos</a>
			</li>
			<li>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="flex items-center gap-1 text-foreground hover:text-primary transition-all"
					>
						Serviços
						<ChevronDown size={16} />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="bg-card-darker border-card text-foreground">
						<DropdownMenu.Item
							class="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
						>
							<Bot size={16} />
							<span>Host de Bots</span>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							class="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
						>
							<Globe size={16} />
							<span>Host de Sites</span>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</li>
			<li>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="flex items-center gap-1 text-foreground hover:text-primary transition-all"
					>
						Downloads
						<ChevronDown size={16} />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="bg-card-darker border-card text-foreground">
						<DropdownMenu.Item
							class="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
						>
							<Package size={16} />
							<span>CLI</span>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							class="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
						>
							<Download size={16} />
							<span>Extensão VSCode</span>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</li>
			<li class="text-foreground hover:text-primary transition-all">
				<a href="/">Documentação</a>
			</li>
		</ul>
		<ul>
			<li>
				<img
					src="https://github.com/neopromic.png"
					alt="Avatar"
					class="size-10 rounded-full cursor-pointer"
				/>
			</li>
		</ul>
	</nav>
</header>
