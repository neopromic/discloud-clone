<script lang="ts">
	import { Activity, Power, Terminal, FolderTree, RefreshCcw, Download } from 'lucide-svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as FileTree from '$lib/components/ui/file-tree';
	import BreadcrumbHome from '../../../components/BreadcrumbHome.svelte';
	import { cn } from '$lib/utils';

	export let data;
	const { bot } = data;

	let isOn = bot.isOn;

	function toggleBot() {
		isOn = !isOn;
		// Aqui você chamaria sua API para ligar/desligar o bot
	}

	const logLevelColors = {
		info: 'text-blue-500',
		warn: 'text-yellow-500',
		error: 'text-red-500'
	} as const;

	type LogLevel = keyof typeof logLevelColors;

	let selectedFile: string | null = null;
</script>

<div class="px-4 lg:px-12 space-y-4">
	<BreadcrumbHome />

	<div class="flex items-center justify-between bg-card rounded-lg p-6">
		<div class="flex items-center gap-6">
			<img src={bot.avatar} alt={bot.name} class="size-20 rounded-full ring-2 ring-border" />
			<div>
				<h1 class="text-3xl font-bold">{bot.name}</h1>
				<p class="text-muted-foreground text-lg">{bot.description}</p>
			</div>
		</div>
		<div class="flex gap-3">
			<button
				class="px-4 py-2 rounded-md flex items-center gap-2 transition-colors bg-card-darker hover:bg-card-darker/80"
			>
				<RefreshCcw size={18} />
				Reiniciar
			</button>
			<button
				class={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
					isOn ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
				}`}
				on:click={toggleBot}
			>
				<Power size={18} />
				{isOn ? 'Desligar' : 'Ligar'}
			</button>
		</div>
	</div>

	<!-- Tabs -->
	<Tabs.Root value="files" class="w-full">
		<Tabs.List class="border-b border-border bg-card rounded-t-lg">
			<Tabs.Trigger
				value="files"
				class="flex items-center gap-2 data-[state=active]:bg-card-darker"
			>
				<FolderTree size={16} />
				Arquivos
			</Tabs.Trigger>
			<Tabs.Trigger value="logs" class="flex items-center gap-2 data-[state=active]:bg-card-darker">
				<Terminal size={16} />
				Logs
			</Tabs.Trigger>
			<Tabs.Trigger
				value="status"
				class="flex items-center gap-2 data-[state=active]:bg-card-darker"
			>
				<Activity size={16} />
				Status
			</Tabs.Trigger>
		</Tabs.List>

		<!-- Conteúdo Files -->
		<Tabs.Content value="files" class="py-4">
			<div class="grid grid-cols-[300px,1fr] gap-4">
				<div class="bg-card rounded-lg">
					<FileTree.Root>
						<FileTree.Folder name="src" expanded={true}>
							<FileTree.Folder name="commands">
								<FileTree.File name="ping.js" extension="js" />
								<FileTree.File name="help.js" extension="js" />
								<FileTree.File name="info.js" extension="js" />
							</FileTree.Folder>
							<FileTree.Folder name="events">
								<FileTree.File name="ready.js" extension="js" />
								<FileTree.File name="messageCreate.js" extension="js" />
							</FileTree.Folder>
							<FileTree.File name="index.js" extension="js" />
							<FileTree.File name="config.json" extension="json" />
						</FileTree.Folder>
						<FileTree.File name="package.json" extension="json" />
						<FileTree.File name="README.md" extension="md" />
					</FileTree.Root>
				</div>
				<div class="bg-card rounded-lg p-4">
					<div class="flex justify-between items-center mb-4">
						<h3 class="text-lg font-semibold">Editor</h3>
						<button
							class="px-3 py-1.5 rounded-md flex items-center gap-2 transition-colors bg-card-darker hover:bg-card-darker/80 text-sm"
						>
							<Download size={16} />
							Download
						</button>
					</div>
					<div class="bg-card-darker rounded-lg p-4 min-h-[400px] font-mono text-sm">
						{#if selectedFile}
							<p>Conteúdo do arquivo {selectedFile}</p>
						{:else}
							<p class="text-muted-foreground">Selecione um arquivo para visualizar seu conteúdo</p>
						{/if}
					</div>
				</div>
			</div>
		</Tabs.Content>

		<!-- Conteúdo Logs -->
		<Tabs.Content value="logs" class="py-4">
			<div class="bg-card rounded-lg p-6 space-y-4">
				<div class="flex justify-between items-center">
					<h3 class="text-lg font-semibold">Logs do Sistema</h3>
					<button
						class="px-3 py-1.5 rounded-md flex items-center gap-2 transition-colors bg-card-darker hover:bg-card-darker/80 text-sm"
					>
						<Download size={16} />
						Exportar Logs
					</button>
				</div>
				<div class="space-y-2">
					{#each bot.logs as log}
						<div class="flex items-center gap-3 text-sm bg-card-darker p-3 rounded-md">
							<span class="text-muted-foreground font-mono">{log.timestamp}</span>
							<span
								class={cn('px-2 py-0.5 rounded-md text-xs font-medium', logLevelColors[log.level])}
							>
								{log.level.toUpperCase()}
							</span>
							<span>{log.message}</span>
						</div>
					{/each}
				</div>
			</div>
		</Tabs.Content>

		<!-- Conteúdo Status -->
		<Tabs.Content value="status" class="py-4">
			<div class="bg-card rounded-lg p-6">
				<div class="grid grid-cols-2 gap-6">
					<div class="p-6 bg-card-darker rounded-lg">
						<h3 class="text-lg font-semibold mb-4">Uso de RAM</h3>
						<div class="space-y-4">
							<div class="flex items-center gap-2">
								<div class="w-full bg-card rounded-full h-2.5">
									<div class="bg-primary h-2.5 rounded-full" style="width: 45%" />
								</div>
								<span class="text-sm text-muted-foreground min-w-[3rem]">45%</span>
							</div>
							<p class="text-sm text-muted-foreground">45MB / 100MB</p>
						</div>
					</div>
					<div class="p-6 bg-card-darker rounded-lg">
						<h3 class="text-lg font-semibold mb-4">Uptime</h3>
						<p class="text-3xl font-mono">24:00:00</p>
						<p class="text-sm text-muted-foreground mt-2">Desde 20 Fev 2024, 10:00</p>
					</div>
					<div class="p-6 bg-card-darker rounded-lg">
						<h3 class="text-lg font-semibold mb-4">Latência</h3>
						<p class="text-3xl font-mono">42ms</p>
						<p class="text-sm text-muted-foreground mt-2">Média dos últimos 5 minutos</p>
					</div>
					<div class="p-6 bg-card-darker rounded-lg">
						<h3 class="text-lg font-semibold mb-4">Comandos Executados</h3>
						<p class="text-3xl font-mono">1,234</p>
						<p class="text-sm text-muted-foreground mt-2">Nas últimas 24 horas</p>
					</div>
				</div>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
