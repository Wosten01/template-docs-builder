import type { FormFieldsState } from './form-fields';

export type CommandTemplate = (fields: FormFieldsState) => string;

export interface Command {
  title: string;
  description?: string;
  code: CommandTemplate;
}

export interface CommandGroup {
  group: string;
  commands: Command[];
}

const parseTemplate = (templateString: string): CommandTemplate => {
  return (fields: FormFieldsState) => {
    return templateString.replace(/\{(\w+)\}/g, (match, fieldName) => {
      return fields[fieldName as keyof FormFieldsState] || match;
    });
  };
};

const commandsConfigRaw = [
  {
    group: "Основные",
    commands: [
      { title: "Подключение к серверу", code: "ssh {username}@{serverIp}" },
      { title: "Обновление системы", code: "sudo apt update && sudo apt upgrade -y" },
      { title: "Создание нового пользователя и добавление в sudo", code: "adduser {newUser}\nusermod -aG sudo {newUser}" },
    ],
  },
  {
    group: "Настройка SSH",
    commands: [
      { title: "Редактирование конфигурации SSH", code: "sudo nano /etc/ssh/sshd_config" },
      { title: "Перезапуск SSH", code: "sudo systemctl restart ssh" },
    ],
  },
  {
    group: "Брандмауэр (UFW)",
    commands: [
      { title: "Установка UFW", code: "sudo apt install ufw -y" },
      { title: "Разрешить OpenSSH", code: "sudo ufw allow OpenSSH" },
      { title: "Включить UFW", code: "sudo ufw enable" },
      { title: "Проверить статус UFW", code: "sudo ufw status" },
    ],
  },
  {
    group: "SSH ключи",
    commands: [
      { title: "Создать SSH-ключ (на локальной машине)", code: "ssh-keygen" },
      { title: "Копировать SSH-ключ на сервер", code: "ssh-copy-id {username}@{serverIp}" },
    ],
  },
];


export const commandsConfig: CommandGroup[] = commandsConfigRaw.map(group => ({
  ...group,
  commands: group.commands.map(cmd => ({
    ...cmd,
    code: parseTemplate(cmd.code)
  }))
}));