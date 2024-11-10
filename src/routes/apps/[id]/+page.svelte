<script lang="ts">
	import {
		Activity,
		Power,
		Terminal,
		FolderTree,
		RefreshCcw,
		Download,
		ChevronRight
	} from 'lucide-svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as FileTree from '$lib/components/ui/file-tree';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { cn } from '$lib/utils';

	export let data;
	const { bot } = data;

	let isOn = bot.isOn;

	function toggleBot() {
		isOn = !isOn;
	}

	const logLevelColors = {
		info: 'text-blue-500',
		warn: 'text-yellow-500',
		error: 'text-red-500'
	} as const;

	let selectedFile: string | null = null;
</script>

<div class="px-4 lg:px-12 py-6 space-y-6">
	<!-- Breadcrumb -->
	<div class="overflow-x-auto">
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/" class="text-foreground">Início</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/apps" class="text-foreground">Aplicações</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<span class="text-muted-foreground">{bot.name}</span>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</div>

	<!-- Header do App -->
	<div
		class="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between bg-card rounded-lg p-4 lg:p-6"
	>
		<div
			class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center w-full lg:w-auto"
		>
			<img
				src={bot.avatar}
				alt={bot.name}
				class="size-16 sm:size-20 rounded-full ring-2 ring-border"
			/>
			<div class="w-full">
				<h1 class="text-2xl lg:text-3xl font-bold">{bot.name}</h1>
				<p class="text-muted-foreground text-sm lg:text-base">{bot.description}</p>
				<div class="flex items-center gap-2 mt-2">
					<span
						class={cn('flex items-center gap-1.5 text-sm', isOn ? 'text-primary' : 'text-red-500')}
					>
						<Activity size={16} class={isOn ? 'animate-pulse' : ''} />
						{isOn ? 'Online' : 'Offline'}
					</span>
					<span class="text-muted-foreground">•</span>
					<span class="text-sm text-muted-foreground">ID: {bot.id}</span>
				</div>
			</div>
		</div>
		<div class="flex flex-row gap-3 w-full lg:w-auto">
			<button
				class="flex-1 lg:flex-none px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors bg-card-darker hover:bg-card-darker/80 text-sm font-medium"
			>
				<RefreshCcw size={16} />
				<span class="hidden sm:inline">Reiniciar</span>
			</button>
			<button
				class={cn(
					'flex-1 lg:flex-none px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors text-sm font-medium',
					isOn ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
				)}
				on:click={toggleBot}
			>
				<Power size={16} />
				<span class="hidden sm:inline">{isOn ? 'Desligar' : 'Ligar'}</span>
			</button>
		</div>
	</div>

	<!-- Status Cards -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
		<div class="bg-card p-4 rounded-lg">
			<div class="flex items-center justify-between">
				<h3 class="text-sm font-medium text-muted-foreground">RAM</h3>
				<span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">45%</span>
			</div>
			<p class="mt-2 text-2xl font-semibold">45MB / 100MB</p>
			<div class="mt-4 w-full bg-card-darker rounded-full h-1.5">
				<div class="bg-primary h-1.5 rounded-full" style="width: 45%" />
			</div>
		</div>

		<div class="bg-card p-4 rounded-lg">
			<h3 class="text-sm font-medium text-muted-foreground">Uptime</h3>
			<p class="mt-2 text-2xl font-semibold">24:00:00</p>
			<p class="mt-1 text-xs text-muted-foreground">Desde 20 Fev 2024, 10:00</p>
		</div>

		<div class="bg-card p-4 rounded-lg">
			<h3 class="text-sm font-medium text-muted-foreground">Latência</h3>
			<p class="mt-2 text-2xl font-semibold">42ms</p>
			<p class="mt-1 text-xs text-muted-foreground">Média dos últimos 5 minutos</p>
		</div>

		<div class="bg-card p-4 rounded-lg">
			<h3 class="text-sm font-medium text-muted-foreground">Comandos</h3>
			<p class="mt-2 text-2xl font-semibold">1,234</p>
			<p class="mt-1 text-xs text-muted-foreground">Nas últimas 24 horas</p>
		</div>
	</div>

	<!-- Tabs -->
	<div class="w-full overflow-x-auto">
		<Tabs.Root value="files" class="w-full">
			<Tabs.List class="bg-transparent min-w-max">
				<Tabs.Trigger
					value="files"
					class="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-primary px-4 py-2"
				>
					<FolderTree size={16} />
					<span class="hidden sm:inline">Arquivos</span>
				</Tabs.Trigger>
				<Tabs.Trigger
					value="logs"
					class="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-primary px-4 py-2"
				>
					<Terminal size={16} />
					<span class="hidden sm:inline">Logs</span>
				</Tabs.Trigger>
				<Tabs.Trigger
					value="status"
					class="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-primary px-4 py-2"
				>
					<Activity size={16} />
					<span class="hidden sm:inline">Status</span>
				</Tabs.Trigger>
			</Tabs.List>

			<!-- Conteúdo Files -->
			<Tabs.Content value="files" class="py-6">
				<div class="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6">
					<!-- File Tree -->
					<div class="bg-card rounded-lg p-4 max-h-[400px] lg:max-h-[600px] overflow-y-auto">
						<div class="flex items-center justify-between mb-4">
							<h3 class="text-sm font-medium">Arquivos</h3>
							<button class="text-primary text-sm hover:underline">Atualizar</button>
						</div>
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

					<!-- Editor -->
					<div class="bg-card rounded-lg p-4">
						<div
							class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"
						>
							<div class="flex items-center gap-2">
								<h3 class="text-sm font-medium">Editor</h3>
								{#if selectedFile}
									<ChevronRight size={16} class="text-muted-foreground" />
									<span class="text-sm text-muted-foreground">{selectedFile}</span>
								{/if}
							</div>
							<button
								class="w-full sm:w-auto px-3 py-1.5 rounded-md flex items-center justify-center gap-2 transition-colors hover:bg-card-darker text-sm"
							>
								<Download size={16} />
								Download
							</button>
						</div>
						<div
							class="bg-card-darker rounded-lg p-4 min-h-[300px] lg:min-h-[500px] font-mono text-sm"
						>
							{#if selectedFile}
								<p>Conteúdo do arquivo {selectedFile}</p>
							{:else}
								<p class="text-muted-foreground">
									Selecione um arquivo para visualizar seu conteúdo
								</p>
							{/if}
						</div>
					</div>
				</div>
			</Tabs.Content>

			<!-- Logs -->
			<Tabs.Content value="logs" class="py-6">
				<div class="bg-card rounded-lg p-4 lg:p-6">
					<div
						class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
					>
						<div>
							<h3 class="text-lg font-semibold">Logs do Sistema</h3>
							<p class="text-sm text-muted-foreground">Últimas 24 horas de atividade</p>
						</div>
						<button
							class="w-full sm:w-auto px-3 py-1.5 rounded-md flex items-center justify-center gap-2 transition-colors hover:bg-card-darker text-sm"
						>
							<Download size={16} />
							Exportar Logs
						</button>
					</div>
					<div class="space-y-2 overflow-x-auto">
						{#each bot.logs as log}
							<div class="flex items-center gap-3 text-sm bg-card-darker p-3 rounded-md min-w-max">
								<span class="text-muted-foreground font-mono whitespace-nowrap"
									>{log.timestamp}</span
								>
								<span
									class={cn(
										'px-2 py-0.5 rounded-md text-xs font-medium whitespace-nowrap',
										logLevelColors[log.level]
									)}
								>
									{log.level.toUpperCase()}
								</span>
								<span class="whitespace-normal">{log.message}</span>
							</div>
						{/each}
					</div>
				</div>
			</Tabs.Content>

			<!-- Status -->
			<Tabs.Content value="status" class="py-6">
				<div class="bg-card rounded-lg p-4 lg:p-6">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div class="space-y-6">
							<div>
								<h3 class="text-lg font-semibold mb-4">Informações do Sistema</h3>
								<div class="space-y-4">
									<div class="flex justify-between items-center">
										<span class="text-muted-foreground">Sistema Operacional</span>
										<span>Linux x64</span>
									</div>
									<div class="flex justify-between items-center">
										<span class="text-muted-foreground">Node.js</span>
										<span>v18.17.0</span>
									</div>
									<div class="flex justify-between items-center">
										<span class="text-muted-foreground">CPU</span>
										<span>2 Cores</span>
									</div>
								</div>
							</div>
							<div>
								<h3 class="text-lg font-semibold mb-4">Estatísticas</h3>
								<div class="space-y-4">
									<div class="flex justify-between items-center">
										<span class="text-muted-foreground">Total de Comandos</span>
										<span>1,234</span>
									</div>
									<div class="flex justify-between items-center">
										<span class="text-muted-foreground">Usuários Únicos</span>
										<span>567</span>
									</div>
									<div class="flex justify-between items-center">
										<span class="text-muted-foreground">Servidores</span>
										<span>89</span>
									</div>
								</div>
							</div>
						</div>
						<div class="space-y-6">
							<div>
								<h3 class="text-lg font-semibold mb-4">Uso de Recursos</h3>
								<div class="space-y-6">
									<div>
										<div class="flex justify-between items-center mb-2">
											<span class="text-muted-foreground">RAM</span>
											<span>45MB / 100MB</span>
										</div>
										<div class="w-full bg-card-darker rounded-full h-2">
											<div class="bg-primary h-2 rounded-full" style="width: 45%" />
										</div>
									</div>
									<div>
										<div class="flex justify-between items-center mb-2">
											<span class="text-muted-foreground">CPU</span>
											<span>25%</span>
										</div>
										<div class="w-full bg-card-darker rounded-full h-2">
											<div class="bg-primary h-2 rounded-full" style="width: 25%" />
										</div>
									</div>
									<div>
										<div class="flex justify-between items-center mb-2">
											<span class="text-muted-foreground">Armazenamento</span>
											<span>250MB / 500MB</span>
										</div>
										<div class="w-full bg-card-darker rounded-full h-2">
											<div class="bg-primary h-2 rounded-full" style="width: 50%" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
