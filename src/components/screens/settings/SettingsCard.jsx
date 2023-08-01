function SettingsCard(props) {
  const { name } = props;

  return (
    <div className='settings-card'>
      {name ? <h3>{name}</h3> : null}
      {props.children}
    </div>

  );
}