import type { PageLoad } from './$types';

// Simulando um banco de dados
const botsDatabase = {
	'1': {
		id: '1',
		name: 'App 1',
		avatar: 'https://github.com/neopromic.png',
		description: 'Bot discord',
		isOn: true,
		logs: [
			{
				timestamp: '2024-02-20 10:00:00',
				level: 'info' as const,
				message: 'Bot iniciado com sucesso'
			},
			{ timestamp: '2024-02-20 10:00:01', level: 'info' as const, message: 'Conectado ao Discord' },
			{
				timestamp: '2024-02-20 10:15:00',
				level: 'warn' as const,
				message: 'Latência alta detectada'
			},
			{ timestamp: '2024-02-20 10:30:00', level: 'error' as const, message: 'Falha na conexão' }
		],
		system: {
			os: 'Linux x64',
			nodejs: 'v18.17.0',
			cpu: '2 Cores',
			ram: {
				used: 45,
				total: 100
			},
			storage: {
				used: 250,
				total: 500
			}
		},
		stats: {
			commands: 1234,
			users: 567,
			servers: 89
		}
	},
	'2': {
		id: '2',
		name: 'App 2',
		avatar: 'https://github.com/user2.png',
		description: 'Bot manager',
		isOn: false,
		logs: [
			{ timestamp: '2024-02-20 11:00:00', level: 'info' as const, message: 'Bot iniciado' },
			{ timestamp: '2024-02-20 11:30:00', level: 'error' as const, message: 'Erro de conexão' }
		],
		system: {
			os: 'Linux x64',
			nodejs: 'v18.17.0',
			cpu: '2 Cores',
			ram: {
				used: 45,
				total: 100
			},
			storage: {
				used: 250,
				total: 500
			}
		},
		stats: {
			commands: 1234,
			users: 567,
			servers: 89
		}
	},
	'3': {
		id: '3',
		name: 'App 3',
		avatar: 'https://github.com/user3.png',
		description: 'Shop bot',
		isOn: true,
		logs: [
			{ timestamp: '2024-02-20 09:00:00', level: 'info' as const, message: 'Iniciando serviços' },
			{ timestamp: '2024-02-20 09:01:00', level: 'info' as const, message: 'Serviços online' }
		],
		system: {
			os: 'Linux x64',
			nodejs: 'v18.17.0',
			cpu: '2 Cores',
			ram: {
				used: 45,
				total: 100
			},
			storage: {
				used: 250,
				total: 500
			}
		},
		stats: {
			commands: 1234,
			users: 567,
			servers: 89
		}
	},
	'4': {
		id: '4',
		name: 'Roger',
		avatar: 'https://github.com/neopromic.png',
		description: 'Roger is the best bot of the world!',
		isOn: true,
		logs: [
			{ timestamp: '2024-02-20 12:00:00', level: 'info' as const, message: 'Roger está online!' },
			{ timestamp: '2024-02-20 12:01:00', level: 'info' as const, message: 'Roger está pronto!' }
		],
		system: {
			os: 'Linux x64',
			nodejs: 'v18.17.0',
			cpu: '2 Cores',
			ram: {
				used: 45,
				total: 100
			},
			storage: {
				used: 250,
				total: 500
			}
		},
		stats: {
			commands: 1234,
			users: 567,
			servers: 89
		}
	}
};

interface Bot {
	id: string;
	name: string;
	avatar: string;
	description: string;
	isOn: boolean;
	logs: Array<{
		timestamp: string;
		level: 'info' | 'warn' | 'error';
		message: string;
	}>;
	system: {
		os: string;
		nodejs: string;
		cpu: string;
		ram: {
			used: number;
			total: number;
		};
		storage: {
			used: number;
			total: number;
		};
	};
	stats: {
		commands: number;
		users: number;
		servers: number;
	};
}

export const load = (async ({ params }) => {
	const bot = botsDatabase[params.id as keyof typeof botsDatabase];

	if (!bot) {
		throw new Error('Bot não encontrado');
	}

	return {
		bot: {
			...bot,
			files: {
				src: {
					commands: {
						files: ['ping.js', 'help.js', 'info.js']
					},
					events: {
						files: ['ready.js', 'messageCreate.js']
					},
					files: ['index.js', 'config.json']
				},
				files: ['package.json', 'README.md']
			}
		}
	};
}) satisfies PageLoad;
