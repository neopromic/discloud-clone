<script lang="ts">
	import { Github } from 'lucide-svelte';
	import { discloud_logo_white } from '$lib/assets';
</script>

<footer class="w-full bg-card-darker mt-6 py-8 px-6 lg:px-12 border-t border-zinc-800">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<div class="flex flex-col gap-4">
				<img src={discloud_logo_white} alt="Discloud Logo" width="170" />
				<img
					src="data:image/webp;base64,UklGRuwKAABXRUJQVlA4TOAKAAAvAUETEDWHgrZtmJQ/7e4PQEQobNsG6Zh3B3NSQv7CqHXmplALe7TgLyznLUFF2v5HcnMFlbr3ApIukA6wwo4XUDiAI/UaGQVmJEFnI8NMlbB3uRMzyjjN//f/z9RWb/c69y2c7aEuX0fhFF3lGxgvdxqmnAWd9gROfQGjxVYNNVRgCW61A+qt+qPfBeYKg4c3EtM3jZzzcOfQyAn2QiHrAH0G567SBYz2BgSSNu+f+dsMpG0bWtufQSRbQSoQzQbQQBpAA2zym0gDaQANXEduGzmSvDnMCB1q5tC7D5Cb/f8iKU24u7u7u7vbypy7ry+WSeRyjkOXu/P/38zZH8unjauAKq6RTemCMnQKuEPaoAAidy6lJ6JfGRRAF7opuTv0QRGe0g7RhTwQJUkybf04z9nda9u2bdu2fe+z/V6EQ9u2y1ja2LZtd+xJUoyK4KX9Z9i2jSPa+T5AncAVGbWl0f5tUrTdZRLHTdud2w3MriIGXYYddugY3ic/MG2wc8ek39RGMG9jR8+bBQws7PBZ5LqGt5wek/Z8x7/nPearhoXjw+aL8+T3LZDfnkNajUUHFpHxZry1kdlhVmhX3cA4EqxdLDMRBZc2Xc1RpdZDie60KN8uuzQ0+Q6zdJC6bkMSnyEmoO4F124ONN3ABINNMkkM4OKBeyYJ2YNIgWpl+kYk1lJpfnpq/hEeD8AVm0OUlTlYYVN4EAp7JpmhLSXTKJlabEZLmebeMxjB5BqqXZhc2j4l2FnMvPgQdckAPG9teujLxt/BPM+lVkJqpBpXocPLmdaOC7cfwCAOIxhsQbwqtLN7TLLEvPiKAbGluaTpmZi/xcqNZ47TWMGwPuj1+nvDmNQLgzv3Q4YlPl7Qu9pxqVAsRTFqBUGNfK9AuxEOQbAhDGIdKgmDOD4rhMzEV8dBGAYzkuSjzwCTlYKDgcZQMCtNRVROny5aUg3vUMGMYHFsHlKVelQrIRi0jSEMRN4VS2MJMDMwt2KQ9DFHCJlD0h8zE84amIGAKskkAUiOTQXGIU0LOWYNzMkARK5sFByqAGBTyP/HELl8046EOQLgtMnauOzTIoU+x6Ho6YdyGLjZhRk7HOP0ifk3RB1qPBk+KwHP84DwCIDHhVIowPuNdqIxJPM+ETkjYFPIyW/EYRsEXwDLf/rpfSgYY77A1kZjYRJj1XDjYDSIp2oCRI+GlsZjVasXPTluTPoBAGoZHgctgLSGxnIexlDtbQABbwBqgiozDwOLKUlEvp8EmBWESIciDgWSAKcHMp2LvzwNUJGd0aY+waqFzFbGZ1oXyz8cE3q5+sVOC3icpwIMseBxdAXx9PnfUY1Q61BYwoIRZniO8RY2bWDaoLxLauWjlQCbRkr8yON4hJTvKh4UciFbmtDWsFZC5piRaF/jcEmIWMUAlv+GsIo+jZBAqi4eMd5FqXUjZzuU5y1NZHVUI9U5bvyFwCDzMGleUXaWsHgaozYMjaFaSezDpj5msY3OIByeJw6CmMxK/qI4f4idMPGyGr7Tcqn9nJqcjSUxva4TIw6lvQ8ZB3csXjwlbQOixcw8iLjFtQG6jwiYPfDbEVDlkkgCPDUi2hMPCYdLmhbz++Qj75Mu2RUXZ1+EzqbFb1exabHFCO4NVbglI3BerH5aP6WxMkOLOjHGTq1EKzViueCz89xlTcrgq1zgpwiI9wLLuQDdXACMlAbvHAT27gUuGJh5MomIQyTYR32iImdi8n5jcti2FrGl1ZIrk+d5BXS6GNJ32kYZ/gXyPEf8zApUmueyklOYjF7JcRFt7FALmWTxRqGxm1k+3vBuDHGJ8OKqcHyfGO8UvmeHwsuyz6xpainlXPSvrg2Azs0UxdYivNlXQMZrI0dUAe30+JLO/D1a6HjUi174qdRf7G8yIIpstkDAGp8sbDS4G9NoKH0XlujDzFyinFWQUE9SIpMSBU+LjEAFOmL1HNewek5Va29zsxi1EvVremT7DYAKKHocMr2Z8ZmuVbilBDZSGYF1003vRQWsH9NVWmOOw41Y/g5rDgEABCGFeCCu1FUCSwEpj0QBZXZoV625iuUYs70wV615Oh+KoCUMKeQDfuOuGrPkiKJVAtFLcWqkqlCJUZTMyAoezD4iQEzguaqpcFOOGFoVLuWINwgNgQqdox2cC2uOAAgKnE5FCfmNVqcEoASyjf0TKolIod7nHgnUyH1dBLIC66dUO+cnRwLtohqTPVT73C2xXM/zLM3fI0BaYPjnL7FjNcZ4zFVSIq8X6f7DFgB5QVLq0Ec2r6J0hx8EjOoEZvIVKnRchEpVpMDdNEeNuTKCQDcuHivwPIx+g6Rl8Zqs0h3nFsRy8r+TYV1d5DFpFrxd9zmysr3PiZSPBc2TByUjAhVuZ5lXF3WoFzNhrTFJOR3LdeIn/SH03N9Wzu/Id9ymhAT53vNRYvKdFL4+5OihZFq1GhW4j0uu2AuMFzONYs3xOkdIjsdhg/COztyC17wC7puahOTiyusuRtb7WoKwQjwC7VwsN9AnsELH3fY+DQAu+5KUaCkg/YOrLs+/0xCFtlPCZQPQg4mqNpAtLjU+Alrsb7OtPFPzlI4LpVRtH9IG/34qtGbrxAbwZC7cAOcPzNPFmQMAzGuOHBRmtM9Q/ScMtgVEVpR/lEzXPoEGDNqAxOwj3sI3FNDBetFDpR7rYnZxNAgkS/slAFIj50ThC0jJCGUPUpLcroDgzugCx5WZj/a3OcDE9DNMqe748l10puJ+R3Fgu6OBfkodSLhCPpt5UoeUAUBTj2s2uV0BAcNKrneXkJ0b/AcAn3LLA99uGl+FBGtfAP4kRfCBjMzGCu0QzVzxAY8MzS8AeKk9MD7J8+/wViPBWupLE+2YACDlfmkoVpBlLCz8CrOkVRc0NQAvY2ZZQjcl0oxWLltYwZURVV68GEfcDyTSNLyHfMlXNZ0PfKEYpOTxPXI1EhYZpBByX65ctrCGLaY8eatjRKpBDJUB5HIppi/7WaYozymrUweQZOKjCXOTKkqkHrHQAMq2sIovrDVSAvqCgQEAKjkBhkmAuupw3ASNbpJO8Uo4YmVSNWqypptNE0ImzdsycI89rGMMGjSkRPpiTP0QhgCUxdZMZYBPqmimPvEQGjngl3jWQssUgAoZvQQNRXybWMnpsq8poClHFK8fyEEAAxBazVej3wBTqRhIZdKMcvLMFx7CKC9KXT5ydTUVxcj0BZ4K2MVaVoebbDf9jzOAQz/B7UfQZbgGTyrAPPcAuh/QUuum8qGpyYlqJqVePeVM8iACKeAruo5O4kyKbazmtXpONgl/L+i2IDkIoR/JDsPVe5sDWlhcTBqalZsmfKE6omgAlaY0QlOi50tSGeEeWTGzk/XMJl/hWgWSERjfyWArEd+Gw/zQFa917j0O+XF4opLHUT/I+Uau6dbvAaDLzF94wocYek3OE7KXOnWpg1CmFmUNndrJiu5Smyol2hIS3whgCEqh/+hynQLWyQR1aZJBRCGiIYVuJ4ecL4o4ghyhpXi2AqSWRrXufWlyofmLlb2KIGd6uUfRtLTW+lJzkslJPw/4xKJCJRIfUHSgKEy2/LsGUTWLWXyhLE/CIy+i8YVaoixEVcaVXsBvW/iWs/QCfvFt0tsb+NX/aL86/3ODz6O2ZNhx/L89cN1FTs9rrusa3OPsmF53Rcxfd3KMbrg0Bl8c+5+ADNuLXEUeNrgw73Renn/l4/luARc="
					width="140"
					alt="Download extension for VSCode"
				/>
				<img
					src="data:image/webp;base64,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"
					width="140"
					alt="Download for Windows or Mac"
				/>
			</div>

			<div class="flex flex-col gap-4">
				<h3 class="font-medium text-foreground">Empresa</h3>
				<div class="flex flex-col gap-2">
					<a href="/" class="footerLinks">Planos</a>
					<a href="/" class="footerLinks">Sobre</a>
					<a href="/" class="footerLinks">Brand</a>
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<h3 class="font-medium text-foreground">API</h3>
				<div class="flex flex-col gap-2">
					<a href="/" class="footerLinks">Como usar</a>
					<a href="/" class="footerLinks">Módulo NodeJs</a>
					<a href="/" class="footerLinks">Módulo Python</a>
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<h3 class="font-medium text-foreground">Recursos</h3>
				<div class="flex flex-col gap-2">
					<a href="/" class="footerLinks">Como hospedar</a>
					<a href="/" class="footerLinks">Fale conosco</a>
					<a href="/" class="footerLinks">Blog</a>
				</div>
			</div>
		</div>

		<div class="mt-12 pt-8 border-t border-zinc-800">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-sm text-muted-foreground">
					DisCloud © 2019 - 2024 • Todos os direitos reservados.
				</p>
				<div class="flex gap-4">
					<a href="/" class="footerLinks">Documentação</a>
					<a href="/" class="footerLinks">Termos de Serviço</a>
					<a href="/" class="footerLinks">Políticas de Uso</a>
				</div>
			</div>
		</div>
	</div>
</footer>
