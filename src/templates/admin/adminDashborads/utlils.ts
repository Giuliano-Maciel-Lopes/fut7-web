import { 
  User, Settings, Database, PieChart, Calendar, Bell, MessageCircle, Folder, 
  ShoppingCart, BarChart2, Cpu, CreditCard, BookOpen, Heart, MapPin, Globe, 
  Camera, Lock, Zap, Award 
} from "lucide-react";

export const boxFunctionalUtils = [
  { id: 1, icon: User, title: "Jogadores", description: "Visualize e edite todos os jogadores.", url: "/players" }, // ja tem / admin na pag da cartinha 
  { id: 2, icon: Settings, title: "team", description: "crie times manualmente.", url: "/admin/teams" },
  { id: 3, icon: Database, title: "partidas", description: "Gerencie os registros e dados das partidas.", url: "/admin/match/create" },
  { id: 4, icon: PieChart, title: "Relatórios", description: "Veja relatórios detalhados de desempenho.", url: "/admin/relatorios" },
  { id: 5, icon: Calendar, title: "Agenda", description: "Gerencie eventos e compromissos.", url: "/admin/agenda" },
  { id: 6, icon: Bell, title: "Notificações", description: "Veja alertas e notificações importantes.", url: "/admin/notificacoes" },
  { id: 7, icon: MessageCircle, title: "Mensagens", description: "Envie e receba mensagens do sistema.", url: "/admin/mensagens" },
  { id: 8, icon: Folder, title: "Arquivos", description: "Gerencie documentos e arquivos importantes.", url: "/admin/arquivos" },
  { id: 9, icon: ShoppingCart, title: "Pedidos", description: "Veja e gerencie pedidos realizados.", url: "/admin/pedidos" },
  { id: 10, icon: BarChart2, title: "Estatísticas", description: "Acompanhe métricas e gráficos.", url: "/admin/estatisticas" },
  { id: 11, icon: Cpu, title: "Processamento", description: "Gerencie processos do sistema.", url: "/admin/processamento" },
  { id: 12, icon: CreditCard, title: "Pagamentos", description: "Visualize e controle transações financeiras.", url: "/admin/pagamentos" },
  { id: 13, icon: BookOpen, title: "Documentação", description: "Consulte guias e manuais do sistema.", url: "/admin/documentacao" },
  { id: 14, icon: Heart, title: "Favoritos", description: "Acesse itens e funções favoritas.", url: "/admin/favoritos" },
  { id: 15, icon: MapPin, title: "Localização", description: "Gerencie locais e mapas.", url: "/admin/localizacao" },
  { id: 16, icon: Globe, title: "Internet", description: "Gerencie conexões e acessos online.", url: "/admin/internet" },
  { id: 17, icon: Camera, title: "Fotos", description: "Veja e gerencie imagens.", url: "/admin/fotos" },
  { id: 18, icon: Lock, title: "Segurança", description: "Configurações de acesso e proteção.", url: "/admin/seguranca" },
  { id: 19, icon: Zap, title: "Atividade", description: "Monitore atividades recentes.", url: "/admin/atividade" },
  { id: 20, icon: Award, title: "Premiações", description: "Veja prêmios e conquistas.", url: "/admin/premiacoes" },
];



