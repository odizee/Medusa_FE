interface SettingsHeaderProps {
  title: string;
  description: string;
}

export function SettingsHeader({ title, description }: SettingsHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-lg font-semibold tracking-tight text-gray-900">
        {title}
      </h1>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
  );
}
