Events.run(EventType.WorldLoadEvent, e => {Time.run(0, e => Vars.state.set(GameState.State.paused))})