import { useState } from "react";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

import { Container } from "./styles";
import { ListEmpty } from "@components/ListEmpty";

export function Groups(){
   const {groups, setGroups} = useState({'Galera do CS'})

  return (
     <Container>
        <Header />
        <Highlight title="Turmas" subtitle="jogue com a sua turma" />
        <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
        <GroupCard title={item} />
         )}
         listEmptyComponent={() => (
            <ListEmpty message="Cadastre a primeira turma" />
         )}
        />
     </Container>
   )
}