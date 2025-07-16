export type CommandTemplate = (username: string, serverIp: string, newUser: string) => string;

export interface Command {
  title: string;
  template: CommandTemplate;
}

export interface CommandGroup {
  group: string;
  commands: Command[];
}

export const commandsConfig: CommandGroup[] = [
  {
    group: "Основные",
    commands: [
      { title: "Подключение к серверу", template: (u, ip) => `ssh ${u}@${ip}` },
      { title: "Обновление системы", template: () => "sudo apt update && sudo apt upgrade -y" },
      { title: "Создание нового пользователя и добавление в sudo", template: (_u, _ip, nu) => `adduser ${nu}\nusermod -aG sudo ${nu}` },
    ],
  },
  {
    group: "Настройка SSH",
    commands: [
      { title: "Редактирование конфигурации SSH", template: () => "sudo nano /etc/ssh/sshd_config" },
      { title: "Перезапуск SSH", template: () => "sudo systemctl restart ssh" },
    ],
  },
  {
    group: "Брандмауэр (UFW)",
    commands: [
      { title: "Установка UFW", template: () => "sudo apt install ufw -y" },
      { title: "Разрешить OpenSSH", template: () => "sudo ufw allow OpenSSH" },
      { title: "Включить UFW", template: () => "sudo ufw enable" },
      { title: "Проверить статус UFW", template: () => "sudo ufw status" },
    ],
  },
  {
    group: "SSH ключи",
    commands: [
      { title: "Создать SSH-ключ (на локальной машине)", template: () => "ssh-keygen" },
      { title: "Копировать SSH-ключ на сервер", template: (u, ip) => `ssh-copy-id ${u}@${ip}` },
    ],
  },
];
