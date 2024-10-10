import {Contaiter, ListTodayWorkDay, ItemTodayWorkDay,
        ContainerFriend, Title, Text, TextSpan
} from './FriendsItem.styled';


export const FriendsItem =({friend})=>{

    const {workDays, imageUrl , title, email, address, phone}=friend;

    const currentDayIndex = new Date().getDay();
    const todayWorkDay = workDays ? workDays[currentDayIndex] : null;

    return (
        <Contaiter>
                <ListTodayWorkDay>
                    {todayWorkDay ? (
                        <ItemTodayWorkDay>
                            {todayWorkDay.isOpen ? `${todayWorkDay.from} - ${todayWorkDay.to}` : 'Closed'}
                        </ItemTodayWorkDay>
                    ) : (
                        <ItemTodayWorkDay>Day and night</ItemTodayWorkDay>
                    )}
                </ListTodayWorkDay>

                <ContainerFriend>
                 
                      <img width={80} height={80}  src= {imageUrl} alt={title}/>

                      <div>
                          <Title>
                             {title}
                          </Title>

                          {email && <Text>Email: <TextSpan> {email}</TextSpan> </Text>}

                          {address && <Text>Adress: <TextSpan> {address}</TextSpan> </Text>}

                          {phone && <Text>Phone: <TextSpan> {phone}</TextSpan> </Text>}
                      </div>

                </ContainerFriend>

        </Contaiter>
    )
}