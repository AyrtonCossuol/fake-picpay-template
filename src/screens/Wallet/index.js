import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
    Wrapper, 
    Header, 
    HeadreContainer, 
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle, 
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketContainer,
    UseTicketButton,
    UseTicketLabel
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Header 
                colors={
                    useBalance 
                    ? ['#52E78C', '#1AB563']
                    : ['#D3D3D3', '#868686']
                } 
            
            >
                <HeadreContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>

                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off' } size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo esta rendendo 100% do CDI.
                    </Info>
                    
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" color="#fff" size={28} />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" color="#fff" size={20} />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeadreContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>

                <Switch 
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Formas de pagamento.
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartao de credito.
                            </CardTitle>

                            <CardInfo>
                                Cadastre seu cartao de credito para poder fazer pagamentos mesmo quando nao tiver
                                saldo no seu PicPay.
                            </CardInfo>
                        </CardDetails>

                        <Img source={creditCard} resizeMode="contain" />
                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060" />

                        <AddLabel>
                            Adicionar cartao de credito.
                        </AddLabel>
                    </AddButton>
                </Card>

                <UseTicketContainer>
                    <UseTicketButton>
                        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />

                        <UseTicketLabel>
                            Usar codigo promocional.
                        </UseTicketLabel>
                    </UseTicketButton>
                </UseTicketContainer>
            </PaymentMethods>
        </Wrapper>
    );
};