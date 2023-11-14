import React from 'react'
// Styles
import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.CenteredWrapper>
        <S.Logo
          src={
            'data:image/png;base64,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'
          }
          alt="Logo guia serve"
        />
      </S.CenteredWrapper>

      <S.ContentWrapper>
        <S.Title id="itt9ts">TERMOS DE USO DA PLATAFORMA GUIA SERVE</S.Title>
        <S.Text>
          Bem-vindo à plataforma Guia Serve. Antes de usar nossa plataforma,
          leia atentamente estes Termos de Uso, pois eles contêm informações
          importantes sobre o seu papel como usuário da plataforma.
        </S.Text>
        <S.Description>Aceitação dos Termos de Uso</S.Description>
        <S.Text>
          Ao utilizar a plataforma Guia Serve, você declara estar de acordo com
          estes Termos de Uso, bem como com nossa Política de Privacidade. o
          Guia Serve, CAIO RIBEIRO RIOS 01502695529, CNPJ nº 39.554.195/0001-57,
          tem como objeto social a intermediação e agenciamento de serviços e
          negócios, através de provedores de perfis em plataforma on-line para
          prestação de serviços.
        </S.Text>
        <S.Text>
          Neste contexto, a relação estabelecida na plataforma on-line é
          composta pelos seguintes agentes:
        </S.Text>
        <S.List>
          <S.ListItem>
            CLIENTES: cidadãos ou empresas jurídicas que desejam se cadastrar e
            baixar o aplicativo gratuitamente, com o objetivo de conhecer e
            contratar um profissional cadastrado na plataforma.
          </S.ListItem>
          <S.ListItem>
            CONTRATANTES: prestadores de serviço que, ao se cadastrarem, desejam
            efetivar um contrato de perfil através da contratação de plano, para
            veiculação e divulgação dos seus serviços profissionais.
          </S.ListItem>
        </S.List>
        <S.Text>
          A contratação do plano implica na veiculação do perfil profissional na
          plataforma, bem como na utilização dos serviços descritos nos termos
          de uso e seus anexos.
        </S.Text>
        <S.Description>1. Do Objeto</S.Description>
        <S.Text>
          1.1. A plataforma tem como objetivo promover os serviços dos
          contratantes (prestadores de serviços) através da criação de perfil
          on-line particular para divulgação dos serviços profissionais aos
          clientes.
        </S.Text>
        <S.Text>
          1.2. A plataforma visa promover a conexão entre contratantes
          (prestadores de serviços) e os clientes, por meio de ferramentas de
          busca e chat online dentro do aplicativo. Clientes podem encontrar os
          prestadores gratuitamente.
        </S.Text>
        <S.Text>
          1.3. Para facilitar a contratação, disponibilizamos um aplicativo
          móvel para os sistemas Android e iOS, que pode ser baixado
          gratuitamente por todos os usuários (clientes e prestadores). O
          aplicativo permite o controle de todo o processo de busca, contratação
          e indicações, com filtros e informações detalhadas dos prestadores de
          serviços em tempo real.
        </S.Text>
        <S.Text>
          1.4. o Guia Serve promoverá a inscrição dos serviços e anúncios em sua
          plataforma mediante a autenticação dos prestadores. É de inteira
          responsabilidade do usuário (clientes e prestadores de serviço) a
          veracidade dos dados compartilhados na plataforma, bem como
          antecedentes criminais, idoneidade das empresas, entre outras
          informações. Nosso objetivo é proporcionar transparência, segurança e
          credibilidade a todos os nossos usuários (clientes e contratantes).
        </S.Text>
        <S.Text>
          1.5. Para garantir transparência e credibilidade aos prestadores de
          serviço (contratantes) e aos clientes, disponibilizamos um campo para
          avaliação profissional e de custo-benefício ao final dos serviços
          prestados. Essa avaliação é necessária para que possamos mensurar a
          qualidade dos serviços prestados.
        </S.Text>
        <S.Text>
          OBS : A avaliação será solicitada ao cliente de forma automática após
          o prazo combinado durante o agendamento, objetivando manter um padrão
          de qualidade disponível a todos os clientes contratantes.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>2. Da Inscrição</S.Description>
        <S.Text>
          2.1. Para se inscrever na plataforma, o prestador deverá realizar o
          cadastro, através do site e contratar um plano. A contratação de plano
          poderá ser realizada por profissionais liberais ou autônomos, que
          estejam legalmente inscritos no CPF e aptos nos cadastros federais,
          estaduais e municipais correspondentes ao seu domicílio, e que tenham
          idade igual ou superior a 18 anos. O cliente poderá efetuar o seu
          cadastro através do aplicativo.
        </S.Text>
        <S.Text>
          2.2. Todos os cadastros passarão por uma verificação rigorosa, para
          garantir a segurança e não duplicidade das informações. Por isso, é
          terminantemente proibido criar mais de um cadastro com o mesmo CPF,
          e-mail ou telefone. As informações são de inteira responsabilidade do
          usuário, sendo este o responsável legal por elas. A constatação de
          qualquer informação falsa ou desconexa com o perfil do usuário implica
          no cancelamento da inscrição e na impossibilidade de prosseguir com o
          cadastro.
        </S.Text>
        <S.Text>
          2.3. Cada usuário poderá acessar a plataforma de um único dispositivo.
          O acesso de terceiros pela conta do contratante é de inteira
          responsabilidade civil e criminal do mesmo.
        </S.Text>
        <S.Text>
          2.4. A plataforma se isenta de qualquer problema relacionado à
          realização ou não dos serviços agendados através da plataforma.
        </S.Text>
        <S.Text>
          2.5. A Plataforma, reserva o direito de excluir qualquer inscrição
          suspeita de fraude, somente procedendo outra inscrição mediante ao
          envio documental ao nosso canal de comunicação e análise do perfil
          devidamente comprovados pelo usuário e checados pelo nosso controle de
          segurança e qualidade, autenticando assim a inscrição. Reservando-se o
          direito de recusar e excluir qualquer inscrição previamente aceita,
          que seja descoberto algum fato superveniente impeditivo sem prévio
          aviso à parte.
        </S.Text>
        <S.Text>
          2.5.1. A qualquer tempo o Guia Serve reserva-se o direito de suspender
          qualquer usuário da plataforma que incorrer em qualquer ato ilícito ou
          que atente contra a moral e os bons costumes da empresa e seus
          funcionários, impossibilitando a este o direito de indenização ou dano
          moral conforme previsto no código civil.
        </S.Text>
        <S.Text>
          2.6. Diante do exposto, e das condições estabelecidas pertinente a
          inscrição e contratação da plataforma, os USUÁRIOS (CONTRATANTES E
          CLIENTES) ficam desde já informados das sanções previstas no código
          civil, cientes das suas obrigações e responsabilidades civis e
          criminais que vierem a dar causa.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>3. Dos Planos e Anúncios</S.Description>
        <S.Text>
          3.1.O Guia Serve oferece planos, os quais encontram-se descritos na
          plataforma junto ao cadastro e oferecem perfis profissionais para os
          prestadores de serviços.
        </S.Text>
        <S.Text>
          3.2. O plano uma vez contratado terá sua renovação automática. Caso o
          contratante não deseje renovar, este deverá encaminhar um e-mail de
          cancelamento para o Guia Serve com antecedência mínima de 30(trinta)
          dias para que seja devidamente formalizado o pedido.
        </S.Text>
        <S.Text>
          3.3. Os anúncios que porventura atentarem contra a norma e
          ilegalidade, não percebidos pelo Guia Serve, e que vierem ser objeto
          de abuso ou queixa superveniente serão bloqueados da plataforma sem
          prévio comunicado e sem prejuízo às partes, até a correta alteração do
          conteúdo.
        </S.Text>
        <S.Text>
          3.4. Sendo a plataforma exclusiva de comunicação para prestadores de
          serviços, está terminantemente proibido a tentativa de qualquer
          anúncio relativo à venda de mercadorias, produtos ou bens móveis e
          utilitários. A tentativa, ao ser identificada, será bloqueada
          imediatamente sem possibilidade de volta e será vinculada ao CPF do
          usuário que terá seu cadastro excluído definitivamente, não podendo
          mais anunciar na plataforma.
        </S.Text>
        <S.Text>
          3.5. Qualquer atividade promovida pelo Usuário (Cliente e Contratante)
          que atente contra os princípios aqui expressos, política de uso e
          privacidade, bem como prejuízo a terceiros, responderá ação civil e
          criminal pelo dolo ou intenção, e perderá o acesso à plataforma.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>4. Da Propriedade Intelectual</S.Description>
        <S.Text>
          4.1. O uso e veiculação das marcas registradas do Guia Serve estão
          sujeitos às normas e patentes internacionais e são estritamente
          proibidos sem autorização por escrito e aprovada pelo Guia Serve, por
          parte de qualquer cidadão, prestador de serviços, cliente ou usuário.
          O uso indevido implicará em sanções civis e criminais, de acordo com o
          código civil e criminal e a constituição do país em vigor.
        </S.Text>
        <S.Text>
          4.2. A empresa, sua marca, logomarca, domínios, site e suas páginas,
          bancos de dados, aplicativo e toda programação visual online estão em
          conformidade com os tratados nacionais e internacionais de marcas e
          patentes. A reprodução e veiculação são estritamente proibidas sem
          autorização por escrito e aprovada pelo Guia Serve.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>5. Política de Integridade da Plataforma</S.Description>
        <S.Text>
          5.1. O Guia Serve compromete-se a manter sua plataforma em
          funcionamento 24 horas por dia, todos os dias, e a realizar todas as
          correções e reparos necessários no sistema, exceto em casos fortuitos,
          de impossibilidade técnica ou causadas por terceiros, como falhas
          elétricas, descargas atmosféricas e desastres naturais. O Guia Serve
          não se responsabiliza por quaisquer danos diretos, indiretos,
          especiais, incidentais ou consequenciais decorrentes ou relacionados
          ao uso da plataforma ou à sua incapacidade de usá-la, incluindo, sem
          limitação, perda de lucros, perda de dados ou interrupção de negócios.
        </S.Text>
        <S.Text>
          5.1.1 Em caso de falha, a equipe de suporte do Guia Serve trabalhará
          incansavelmente para corrigir e restabelecer a plataforma, visando
          manter a qualidade e a disponibilidade de nossos serviços. No entanto,
          o Guia Serve não assume qualquer responsabilidade pela inatividade da
          plataforma devido a eventos de força maior.
        </S.Text>
        <S.Text>
          5.2. O Guia Serve não se responsabiliza por eventuais falhas no sinal
          de internet do usuário, assim como por problemas com a conexão
          telefônica ou com equipamentos que não estejam em conformidade com o
          sistema.
        </S.Text>
        <S.Text>
          5.3. O acesso do usuário à plataforma é de sua total responsabilidade.
          É responsabilidade do usuário garantir um meio seguro e confiável de
          acesso à sua conta no Guia Serve, mantendo seu sistema operacional e
          hardware em perfeito estado para a conexão com o servidor ou provedor,
          livre de vírus e softwares maliciosos que possam danificar ou alterar
          as configurações do sistema do usuário e afetar a conexão com a
          plataforma do Guia Serve.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>6. Termos Gerais</S.Description>
        <S.Text>
          O Guia Serve se reserva o direito de modificar estes Termos de Uso a
          qualquer momento, sem aviso prévio. Visando dar total transparência a
          política do contraditório e a ampla defesa por parte dos usuários, em
          caso de alterações, o Guia Serve informará aos usuários via site,
          email ou aplicativo. O contratante da plataforma que não estiver de
          acordo com os novos termos, obedecendo o prazo de manifestação deverá
          encaminhar sua discordância através de e-mail para equipe de suporte.
          Passado o prazo de trinta (30) dias sem manifestação, fica determinado
          a permanência das modificações propostas, as quais terão validade no
          contrato entre as partes. O uso contínuo da plataforma após a
          publicação de alterações constitui sua aceitação dos novos termos.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Subtitle>POLÍTICA DE PRIVACIDADE DA PLATAFORMA</S.Subtitle>
        <S.Text>
          A presente política de privacidade contém informações sobre coleta,
          uso, armazenamento, tratamento e proteção dos dados pessoais dos
          clientes e contratantes do site e aplicativo do Guia Serve, com
          finalidade de demonstrar absoluta transparência quanto ao assunto e
          esclarecer a todos os interessados sobre os tipos de dados que são
          coletados, o motivo da coleta, e a forma como os usuários podem
          gerenciar ou excluir as informações na plataforma.O Guia Serve conta
          com armazenamento de dados em servidores tercerizados, objetivando
          manutenção em alta performance quanto o sigilo das informações dos
          seus usuários respeitando integralmente a LGPD em vigor no Brasil.
        </S.Text>
        <S.Text>
          Os dados dos clientes e contratantes são recolhidos pela plataforma da
          seguinte forma:
        </S.Text>
        <S.List>
          <S.ListItem>
            Quanto o usuário cria uma conta ou perfil na plataforma. Esses são
            os dados de identificação básicos, como nome completo, email,
            telefone, CPF, foto, profissão, endereço e cidade de residência. A
            partir deles, podemos identificar o cliente e o prestador, além de
            garantir uma melhor segurança e experiência na plataforma. Ficam
            cientes os clientes e prestadores de que seu perfil estará acessível
            a todos e demais usuários visitantes da plataforma, e que ao entrar
            em contato com outro usuário, seus dados poderão ser compartilhados
            com eles a fim de viabilizar a contratação do prestador.
          </S.ListItem>
          <S.ListItem>
            Quando um usuário e visitante acessam páginas do site ou aplicativo.
            As informações de interação e acesso são coletadas pela empresa a
            fim de garantir uma melhor experiência ao usuário e visitante. Estes
            dados podem tratar sobre palavras chaves utilizadas em buscas, o
            compartilhamento de um documento específico, comentários,
            visualizações de páginas e perfis, URL de onde os usuários provêm, o
            navegador que utilizam, IPs de acesso, entre outros.
          </S.ListItem>
          <S.ListItem>
            Quando um usuário entra em contato com o prestador ou solicita um
            agendamento. Os dados e informações transacionais podem ser
            coletados para garantir uma segurança durante a transação entre
            cliente e prestador. Estes dados incluem dados transacionais de
            agendamentos, como serviço, valores, data, horário, mensagens entre
            clientes e prestadores, avaliações e comentários.
          </S.ListItem>
        </S.List>
        <S.Text>
          O Guia Serve coleta dados por meio de tecnologias de tracking e
          cookies (como Google Analytics, Google Tag Manager, HotJar e Facebook
          Pixel), informações sobre dados de comportamento de navegação na nossa
          plataforma para melhorar a experiência do usuário em nosso site e
          aplicativo.Os dados coletados na plataforma podem ser utilizados para
          fins de pesquisa e estatísticas, monitoramento, publicidade, estudos e
          levantamentos internos.As informações entre Usuários (Cliente e
          Contratantes) serão explícitas no perfil do prestador e são de inteira
          responsabilidade do mesmo, cabendo a ele definir o que for exigido
          para a devida contratação e a observância da plataforma.Trabalhamos
          com tecnologias atuais e seguras para garantir uma autenticação
          confiável dos dados e eliminar a vulnerabilidade a ataques
          cibernéticos, objetivando dar segurança aos nossos clientes e
          usuários.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>
          1.Das sanções e relacionamento com usuários
        </S.Description>
        <S.Text>
          É estritamente proibida a manipulação direta ou indireta dos preços
          estabelecidos nos planos e propostas enviadas na plataforma, assim
          como a divulgação de qualquer conteúdo de outros profissionais ou
          dados. Também é proibido utilizar qualquer meio para apropriação
          indevida de atributos ou informações da plataforma, exceto por meios
          legais. Qualquer tentativa de fazê-lo resultará na exclusão do
          usuário, bem como na suspensão ou exclusão do cadastro do Contratante,
          podendo até ser acionadas as autoridades competentes.
        </S.Text>
        <S.Text>
          É expressamente proibida a utilização de qualquer sistema, programa ou
          meio eletrônico que possa comprometer a integridade da base de dados
          da plataforma, bem como violar perfis e qualquer propriedade
          intelectual do Guia Serve. Ressaltamos que tais práticas estão
          sujeitas às sanções estipuladas neste termo, bem como às penalidades
          previstas na legislação de combate a crimes cibernéticos e no código
          civil.
        </S.Text>
        <S.Text>
          Os prestadores de serviços que aderirem a um plano devem aceitar
          integralmente as condições estabelecidas nestes termos. Além disso,
          concordam que, a qualquer momento, mediante notificação de infração, o
          Guia Serve poderá suspender ou excluir por tempo indeterminado
          inscrições e perfis que contenham conteúdos negativos ou que violem os
          princípios éticos, ou ainda em casos de reincidência de tentativas.
          Nestas situações, não será efetuado reembolso do valor contratado.
        </S.Text>
        <S.Text>
          As sanções aplicáveis a possíveis faltas e descumprimentos por parte
          dos usuários oriundos de:
        </S.Text>
        <S.List>
          <S.ListItem>
            Descumprimento de qualquer critério estabelecido nestes termos
          </S.ListItem>
          <S.ListItem>Legalidade criminal e civil</S.ListItem>
          <S.ListItem>
            Conduta inapropriada que atente a moral dos usuários e funcionários
            da empresa
          </S.ListItem>
          <S.ListItem>
            Danos a usuários e terceiros e danos a plataforma
          </S.ListItem>
          <S.ListItem>
            Dificuldade de autenticação da conta e dados incorretos
          </S.ListItem>
        </S.List>
        <S.Text>
          Poderão ser: Advertência, multa, suspensão temporária, remoção da
          plataforma e suspensão definitiva.
        </S.Text>
        <S.Text>
          Nos casos de advertência, esta será realizada através de correio
          eletrônico. Caso haja uma segunda advertência o anunciante receberá um
          novo comunicado e o seu perfil ficará suspenso até o esclarecimento do
          ocorrido.
        </S.Text>
        <S.Text>
          Nos casos da suspensão temporária, o plano contratado pelo
          profissional será suspenso até a reabilitação do cadastro do
          prestador, quando voltará a viger normalmente.
        </S.Text>
        <S.Text>
          Em situações em que ocorra a exclusão do profissional da plataforma,
          fica estabelecido que ele não poderá se registrar novamente na
          plataforma pelo período de um ano, contado a partir da data de
          exclusão. No caso de desligamento devido a fraude ou crime, o Guia
          Serve não efetuará reembolso dos valores pagos, reservando-se o
          direito de suspender permanentemente o prestador na plataforma.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>
          2. Condições gerais ao prestador de serviço
        </S.Description>
        <S.Text>
          O sistema de treinamento, aprimoramento e workshops disponíveis na
          plataforma seguirá as categorias profissionais estabelecidas. Todos os
          profissionais e usuários têm acesso a esses eventos e também concordam
          em se submeter ao sistema de qualificação da plataforma, que tem como
          objetivo padronizar, otimizar e promover o desenvolvimento contínuo
          das interações entre os profissionais e os usuários da plataforma no
          dia a dia.
        </S.Text>
        <S.Text>
          Toda notificação e exclusão obedecerá a um procedimento padrão, a
          partir da verificação de qualquer ilicitude. Nesse sentido, o
          profissional será inicialmente notificado e terá um prazo de 48 horas
          para prestar esclarecimentos. Após o término desse prazo, o perfil
          será bloqueado até que as correções necessárias sejam feitas.
        </S.Text>
        <S.Text>
          o Guia Serve a qualquer tempo poderá excluir comentários que se
          encaixem com as seguintes categorias:
        </S.Text>
        <S.List>
          <S.ListItem>
            Ofensas pornográficas, pedofilia e a honra alheia
          </S.ListItem>
          <S.ListItem>Discriminação sexual e Racismo</S.ListItem>
          <S.ListItem>Assédio moral, sexual</S.ListItem>
          <S.ListItem>Agressão verbal, ameaças</S.ListItem>
          <S.ListItem>Atentado ao direito de imagem ou autoral</S.ListItem>
        </S.List>
        <S.Text>
          Dentre as obrigações dos prestadores de serviços, entendemos que o
          mesmo deverá possuir como atributo principal de sucesso em qualquer
          atividade e capacidade para prestar um bom serviço.
        </S.Text>
        <S.Text>
          O contratante, conhecido como prestador de serviços, é o único
          beneficiário de eventuais serviços que for contratado. Portanto, é
          responsável pela emissão de notas fiscais em nome de seus clientes,
          pagamento de impostos, taxas, salários e encargos sociais, além de ser
          o único responsável por qualquer demanda judicial e/ou trabalhista
          resultante de suas ações e da qualidade dos serviços prestados. O Guia
          Serve não assume nenhuma responsabilidade pelas atividades executadas
          pelos profissionais anunciados, agindo apenas como um canal de
          comunicação.
        </S.Text>
        <S.Text>
          Caberá ao prestador de serviço e o cliente realizarem o acordo e dele
          certificarem-se de todas as formas legais de conclusão, execução e
          valores, cabendo ao profissional assumir a responsabilidade total pela
          prestação de serviços mediante o pagamento dos serviços executados.
        </S.Text>
        <S.Text>
          Em casos de danos a terceiros, o Guia Serve reserva-se o direito de
          suspender a conta do prestador ou cliente por tempo indeterminado ou
          até a resolução do problema. Além disso, eles estarão sujeitos a
          processos civis de indenização movidos pelo Guia Serve.
        </S.Text>
        <S.Text>
          O Guia Serve não é parte em quaisquer acordos celebrados entre
          prestadores de serviços e clientes. O Guia Serve não controla e não é
          responsável pela qualidade, segurança ou legalidade dos serviços
          prestados pelos prestadores de serviços. O Guia Serve não garante a
          exatidão das informações fornecidas pelos prestadores de serviços ou
          clientes na plataforma.
        </S.Text>
        <S.Text>
          Tais medidas visam dar segurança aos profissionais e clientes,
          mantendo o respeito aos usuários, gerando credibilidade e segurança
          aos envolvidos na prestação de serviços de forma
          igualitária.Importante frisar que o prestador de serviço, anunciante
          da plataforma Guia Serve está diretamente comprometido a seguir o
          código de defesa do consumidor e código civil, objetivando praticar
          com ética, pontualidade e qualidade de qualquer serviço contratado,
          mantendo suas avaliações sempre positivas e que irão promover um
          perfil comprometido e verdadeiramente profissional.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>
          3. Política de responsabilidade da empresa
        </S.Description>
        <S.Text>
          O Guia Serve atua como uma plataforma de comunicação, e não se
          responsabiliza pelos agendamentos entre os Prestadores de Serviço e
          Clientes usuários, bem como não recebe nenhum valor por esta relação.
          Os pagamentos sobre serviços deverão ser acordados diretamente entre
          as partes interessadas.
        </S.Text>
        <S.Text>
          O Guia Serve não se responsabiliza pela capacidade, qualidade,
          pontualidade dos serviços prestados pelos prestadores de serviços
          agendados pelos usuários da plataforma. A plataforma do Guia Serve
          funciona como mero facilitador de comunicação entre prestadores de
          serviços e usuários. Portanto, não se responsabiliza pela contratação
          de prováveis serviços que dar-se-á externamente ou não ao ambiente
          virtual. O Guia Serve não outorga nenhum direito de negociar nada em
          nome da empresa, bem como dar garantias e uso do nome da plataforma
          como referência a qualidade ou cumprimento de eventual contrato entre
          usuários e prestadores de serviços. O Guia Serve disponibiliza através
          da plataforma um perfil profissional, bem como um chat, que promove a
          aproximação entre prestador de serviço e usuário. Desta forma as
          negociações por serem inicialmente em um ambiente virtual, estas devem
          ser conduzidas com cautela e devidamente certificadas e contratadas
          obedecendo toda segurança jurídica entre as partes, objetivando o
          cumprimento do objeto pactuado.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>4. Parágrafo único</S.Description>
        <S.Text>
          O Guia Serve através dos seus sistemas e toda a plataforma está de
          acordo com a Lei 13.709 de 14 de agosto de 2018, que dispõe sobre a
          proteção de dados pessoais dos usuários, a qual alterada pela Lei
          12.965 de 23 de abril de 2014 (Marco civil da internet) dispõe e
          assegura toda legislação pertinente a matéria. Desta forma, a Lei
          Federal 13.709 passa a fazer parte integrante deste contratoEm
          consonância, os nossos usuários ao participar da plataforma Guia
          Serve, obrigatoriamente, concordam e aceitam todas as cláusulas e
          normas aqui contidas, sendo assegurados pelo Guia Serve quando a
          privacidade dos dados e informações veiculados em nosso sistemas.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>5. Do foro</S.Description>
        <S.Text>
          Diante do exposto, em consonância com a Constituição Federal de 1988,
          o Código de Processo Civil Brasileiro e com a Constituição da
          República Federativa do Brasil elegemos o foro da cidade de Ilhéus na
          Bahia para dirimir as dúvidas e questionamentos a estes termos e
          contratos pactuados nesta plataforma.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>
          6. Política de proteção de dados da empresa
        </S.Description>
        <S.Text>
          O Guia Serve disponibiliza a todo o cliente , e a quem possa
          interessar (mediante solicitação judicial), as informações referente o
          tratamento de dados pessoais , conforme estabelece : REGULAMENTO (UE)
          2016/679 DO PARLAMENTO EUROPEU E DO CONSELHO DE 27 DE ABRIL DE 2016
          (RGPD ) E ( LGPD ).
        </S.Text>
        <S.Text>
          De acordo com a política de privacidade do Guia Serve pautado nos
          dados cadastrais em todas as suas categorias profissionais,
          apresentamos o detalhamento relativo ao tratamento de dados
          administrados por nossa plataforma.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>7. Autoridade de Controle de Dados</S.Description>
        <S.Text>
          Guia Serve - CAIO RIBEIRO RIOS, Av. Osvaldo Cruz, 74, Sala 109, 1º
          Andar - Boa Vista, Ilhéus - BA, 45652-130
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>8. Como os dados são obtidos</S.Description>
        <S.Text>
          Os dados pessoais processados pela plataforma são obtidos a partir do
          cadastramento voluntário dos profissionais, tratados como
          Contratantes, e dos clientes, usuários da plataforma.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>9. Por quanto tempo guardamos seus dados?</S.Description>
        <S.Text>
          Todos os dados arquivados em nosso banco de dados e servidores ficam
          disponíveis durante o período que o contratante ou cliente for usuário
          da plataforma ou até que os mesmos solicitem a exclusão ou
          anonimização do seu perfil.
        </S.Text>
        <S.Text>
          Dados dos usuários somente serão excluídos ou anonimizados através da
          solicitação de exclusão por e-mail devidamente cadastrado no cadastro
          pessoal de cada usuário.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>
          10. Como se dará a legitimação para o tratamento dos seus dados?
        </S.Description>
        <S.Text>
          O manuseio dos dados é legitimado no momento do consentimento
          outorgado ao preencher o formulário de cadastramento da plataforma
          Guia Serve .
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>11. Quem tem acesso aos seus dados?</S.Description>
        <S.Text>
          A sua privacidade é muito importante para nós. Os dados compartilhados
          com terceiros, segundo descritos na sessão de finalidade, dizem
          respeito às qualificações profissionais pertinente às categorias
          divulgadas e são veiculados com o objetivo de prospecção de usuários,
          para fins de estudo, análise de dados e aprimoramento da experiência
          de usuários na plataforma, sendo anonimizados sempre que possível e
          diante da assinatura de termos de confidencialidade nos casos em que a
          anonimização de dados não for possível.
        </S.Text>
        <S.Text>
          As campanhas realizadas em conjunto com empresas parceiras somente
          poderão acessar dados qualitativos e profissionais com o objetivo de
          aprimorar a experiência dos usuários na plataforma, seguindo as normas
          e instruções da empresa sem poder destiná-los a qualquer outra
          finalidade.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>
          12. Quais os direitos dos usuários quanto aos dados pessoais?
        </S.Description>
        <S.Text>
          Todo cliente cadastrado na base de dados da plataforma Guia Serve tem
          o direito em :
        </S.Text>
        <S.List>
          <S.ListItem>
            Solicitar acesso a seus dados pessoais e tratamento.
          </S.ListItem>
          <S.ListItem>Solicitar sua correção ou anonimização.</S.ListItem>
          <S.ListItem>
            {' '}
            Diante do exposto , o cliente que desejar poderá utilizar seu
            direito de reclamação na autoridade de controle (via carta postal),
            caso considere violação ou identifique alguma vulnerabilidade no
            tratamento dos seus dados pessoais.
          </S.ListItem>
        </S.List>
        <S.Text>
          Caso o usuário solicite a limitação do tratamento dos seus dados, eles
          serão unicamente guardados para o exercício ou a defesa de
          reclamações, e nos casos de oposição, os dados deixarão de ser
          tratados, salvo por motivos legítimos imperiosos, o exercício ou a
          defesa de possíveis reclamações.
        </S.Text>
        <S.Text>
          Importante ressaltar que todos os diálogos entre prestadores de
          serviços e clientes ficarão armazenados em nosso servidor para
          legitimar dúvidas e soluções de conflitos que possam acontecer.
        </S.Text>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Description>
          13. Politica anti-spam e confiabilidade de dados.
        </S.Description>
        <S.Text>
          O Guia Serve preza por todo sigilo e uso devido dos dados
          profissionais cadastrados em sua plataforma. Diante disso solicitamos
          a todos os profissionais que caso tenham conhecimento ou suspeita de
          uso indevido dos seus dados por parte de algum meio publicitário,
          citados em nossas finalidades nos comunique o quanto antes para que
          possamos adotar as medidas cabíveis .
        </S.Text>
        <S.Text>
          Solicitamos também que nos seja informado e atualizado dados que
          possam ser alterados no cadastro profissional como mudança de
          telefone, endereço para que possamos estar em constante contato com
          todos os profissionais, bem como alterarmos algum dado que por ventura
          tenha sido cadastrado erroneamente.
        </S.Text>
      </S.ContentWrapper>
      <S.CenteredWrapper>
        <S.Logo
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABoCAYAAAAtg45YAAAACXBIWXMAABJgAAASYAFoj4igAAAbxklEQVR4nO2dvY7bSLbHaxrMx5oXGF/5AcaADDC0F1DHdxJ1ajtRg9H6RlI23qwVrTcSWok9aTPxxhawdijAAuwHsGC/wGqcC/BFtU+1qw+LrCJFFr/+P0AYD6mm+FGs+tc5p8756du3b6IMgjB6IoT4XQjxSAjxcykHrZcvQoi3QohXh83ybQeuBwAAAACeOFpgBWEkRdULIcSviZ3d4Z0Q4tlhs/yAhgkAAAAAG0cJrCCMXgkhHid2dJenh83yFVoVAAAAALIoLLCCMJJus4eJHd3n/w6b5Qu0KgAAAACkcZKyPZMgjF70VFxJ/kluUQAAAAAAI7ktWEEYySD2/yR29IuvQoi7h83yLzQrAAAAAHCKWLCeJ7b0D7lK8lnfbwIAAAAAzOQSWEEY3e2xa5DzJLEFAAAAAL1HFLBgIfboB78GYXQ/sRUAAAAAvSevwHqU2NJvILAAAAAAkCCvwLqT2NJv7vb9BgAAAAAgSaBv0crdpAkpWGwAAAAAACxcCyyKJXrd8XI3AAAAAABeCIIwukNFjbtQoBkAAAAAoHZOqFAzxBUAAAAAQEmcIPUCAAAAAEC5nMB6BQAAAABQLkHK0T6mlIKR7sTfElsBAAAAAMANaQLrr8Nm+ZZvDMIIxY0BAAAAACwUKfYMAAAAAAAygMACAAAAACiZNBchAIUIwmgkhJCfgfbfNPZCiK0QYif/e9gsdynfAwAAAFoFBBY4iiCMhkKIiRBiTJ+8TNT3gzCSAmstP4fNMq7iyQRh9C2xUeOwWf6U2FghZZ1PEEYzIcRFYscP5ofNcpHYWu21vcloE/FhszxLbG0OA2qbQ5oo6KxpUlBJGwUAdAMILFCIIIymQoipYfA5hiEdcxqE0Z4GsNVhs9ziKbULEt5p4koyCcJocNgs94k99SLb80wX/gbUdclzXwkhFvTvssgU3RUzp+uxUcY5brWPEq3H8l7rk+Tx7tXamrLhk6KzFNHehvYADPRJYH0VQrwSQnwQQtylwtX/m/gWyIQsJVMSQ1Uy0MSW7HwXh81yjafTGrIEimLasM77ggY9Vwb0/SkNRKt6T791jNgEba0mVUdcSKwdU1nXTaKlCejvSK8tonKypf5ddNJVxjHKpi8C60+Z1+uwWd5KM0FFrlGH0YEgjCY0AFUtrExcux9JaM1h0WoFU4eTnDREYMmO+U2GNXbNvsu/J7dd0vbzxF8DV1SYwYzuY5EJVcysQuOGChcuLnsnrmhMUeElA227ChOx9g0kqmZ0jJG2XVlFFy5iizwyamzb679NccVKDO8pvMHJ2toHgfXnYbN8ktj6XeV+CMLoEURWOtSAryzuHl/Ic3gfhNHC9cUB/qEOyUWIj6QrsebFDWniak2WFNPAp+KzZuw6lagsU2StCwqNohSZvOQ9R7X4ZZjSTob0TGK6l3necxXHqfqrSUNFL7fwmtqZiTa0h0xoTLmg90VZ7vRnLJ/dBQmws7T+gbwpyuLM74ty9UsPiJyUJ6yiQRiN6Tz29JvqWkf026d0jhd0nntqmzM5BjkJwMSWbvElTVwpILLSoUZ2aVkJWAcziuE5gzWrkbhYrxR1W7GumLja04CcNeCp2KuVIY5mSvvnib8qxroFMTDHnKOK1ZsYJnETejZnOQf6WDuWCjVIDLA1w92DrtfXhvaQComrN/TcUxfeaB4TOaE+5f28tqjnWoSbJts00ZPfu6R4T/5byhot//ZUhaBowuu96TyDMLokAbi2jT9pebDuB2H0ln8obqlNvHI5VymyhBCPKE4L/GjAVwXFlQpQn9NgdWr4zOlTdDY2pJcvT8wM8INL/JUijxgrmxkb1PfUTrPEFWdhsJDw44J0diR+Tikgnd/7YYqFMQt+jKY9C27h7VPs3iVd+6lB8NxAq8gfkPC89fzInXdBC6DOTOJKfD/GllYqrzSLmIm5Ht9L/17QeSZclYfN8pzOyzr2pFmwpCXnYWJr+0iU+0mDLFmvhRCPU77SG0ih5x34lKk3drQqqQZ93Xip8auZbB5Rd0Er1uZpLxrwBz3HPM9vKGeaNVgiB6yDVOKqyHmoAfJS2zbz7MrpAjuyVnHL+YCsCaeO91RZGFUfptpkU/oH3rf2Iv5Ki7lyiqOl/vw0sYPeLRI6VuT3yJp1kXKvTdtUO0s7z7WLcJcWrHeJrd3gq6meooUX2bu7TwFxtSY/+b3DZlk4AF3OWOiFuUeWrTydoTzfN/oqElAbabPELOqwYk2ZEFxkdKYu8HitcckpTPpETP0Afx7cnZsFF2JF2mVV6OdSVnqKNnAdc5VlubJBHothATfpiiZzXq2ZUmA9T2ztBnnFlXIV9pac4mpHwuq0zKSgctZCL2ARoQVqhARukYGsjsFPb+e7kuJaVHtdpAgE4I7JojjIEbbAA6ebIrC4hbcv1qtBSSs6RyTSclmHKch979tdfEJWnqeJPe0nt8AKwuhOYmNPyCmu5ADyoKps6+K20Hrg8FLG5NOHGKuXooPYICM+ogr46rWy2rEUar+Q0ELZp+Mxiaxhjlxl3KJoWrHoGz7A9y09w7HvxfCISffOt1X5Osj9sFnKYPC/dcxd+DqxxU7bgvhLQUseamNPKza8xTvJJboUqJi2XDsz0BF45RhXn0+BZUrJAJrJnuKy9PfbdREBDx6v24rFLbzcytYH6r5er2EkfBXhX4lvtJTDZvm5K9dSJdqSVBtqKWstK17od/lsdu4a6AiqhRYaHDM7nHiMoeOWDIjzZrNLWalpY8ssJnULrF66BxnHWpCOeVcHvt321wIrCCOZK+o/KB1zXUKnN2hJRG0ocVVrTAn9vlpJdO67eDHIxGa92jl0jnUNgIiVaj4xszS6LiLQJ4SuCXCrgqcE6Y3AIg/DtgSBtVYJihN7MtCSH3t13Z9Qks2XiT0tJwijImKpVwLLMYloI8SVgmKzarOkgVRs4ih2GFDqyomF1X7tgE+oXNoLb3N1tTGTe7BvxFTy7JhAcyWy8z7HmZa+wxvSgvWsow+5yOrI3sRgUSN3sRg0RlyBZkJtyTaj5BYIE7lnpgXhs1ik92gHPKWBS//Fs6TXZSUtWhqnS6zoeVy4hgPI+GC9T6CxaEXlapyEGiUmnVC8rtdwgJMOuwUfk+szD30Kcr9MbElyDnEFHLANWlvKqhwbxA3HxwDIzwFZ19uDboEwFd42oYuZY2MFi8JL43R6YYVcFUzi6EZIkbg5U9n5syZT8u9USRpDnzAn0XxlW32sldSRiUnLKl/lTFomd1kyxpQT6n7L6vW9DMJIrZLMhFyKv2Z9pyuwyuFpxHDDAUcyOzk2wMWWAOWpwRVUNir4Wb0DkxJrB4Lqn53O2LCNs2ILeSae4+6GTMT3wXqlwk+G+gIFOdGStQWp/JEsdRazQs3qXk1NdQDpGHs6xhWJLP0Ye/pdvb5lbFgk4YW0WoQfDpvlI/5JEV1NR4osF8vUo8SW7pI1wAmt4C0AmZBYt5n7ucDKYkgBqVXDrRqoadkOuOXHxdXEA8p9x2HxCUgfJq7KSpywWJNX5B49yykJpf/S5z2J4V1WvUIVi0sToxEJuk90jE9azcN5nWl80ixYXcMlZcPviS0dhEyqNuvVAnmlgCM295q0hN50sjSD3VnaoA8Lw4qJKlU7EC7x5rPXhFWe0jlK6KiAc1+WJF1g8dQRXUWKn1FaxnXlLtTSu6jnuKVM7U7vIQmwBcVjjbSak9u039b+Ng7C6BfTWEdWMuM+2u9k8e6DwPr3YbPMzO9FGdz7kqLC5s45qlYU6A/UOdrak6mT4y4bztSDy06Vx1Eia0Cz3lPkxWo82wJxczG1OSXMyijb4gKP+epFcDsJE9O7z7+3o3fxqPtCYip3XFuagLLtcyXNRdglrPFXPbJeudSKQ9wVcMXWltJy/Zi26fgqncMLPI/IvYC0Dd2Dt0Vfqwm5O7KPqwd7S9cF1pfDZulSMqerqSo4Lp0KBBZwxRrcbpoF0qzVNtv0sbLPVIZlQHEgiMnqHnqbGxjETxXw3FeoUdkjui6wrMKJEq3+ltjRTWwzc+OACIDhvRk5tKcsEWVNOuqpdM6O3IJ84LuglU6wZjWPrPi9LLjAqVrE88zxWe8D6CBdFljvYL1KYOtQ0AEAV1xi+bJEVNY+hS83jnQTPjC0/zFZsy5rLrECbqM/i7yLEribsEoRr7ffNHc56DBdFVgyj5c1yShZr3oR3E4BybZBAgILuJIn91UCspTa3NE+s27vyZJlCq6fUmzWVQMKBvcdPknMa3Hn7bLK56m7IGMsnugfXRVYTw6bpUtqhiLldNqKTVzt9eX0AKThmOojU2AR1jisrGzPFbHQcvRwJlrOnhmsWrXAXbZ5LVg8TUJVcVjcOmZqT6DjdFFgPXVxDQZhJFcOPkzs6C62WBLk/wGu2FzNW5c8NuRCtM3q67AYqbis05SBcUAxWp/gPvQOd7uZno8N3XLK46TKQn9H4B7sKV0TWE8dy+LccUzf0CcgsIAVCjy3zfrzDCbWYPfEFn+sSWTdI8uWycI7xapDb/CFFUVFiw83oX5MrMzuKWkC62EQRt/4p+EWHydxRbxqWU3FMrC6CBNbAEjiMhjlGfhsg4+v0jlZ7Cg26x6ldTCVa7kgoYVVh9XBRWxRgbVjE8qyBRYvHwXrVU8JKCC8CWLjnRDiLX0e0cdF0H2RiUIPm6VTncQgjJ70KGu7DtwYoAysqwfld2SR9RLxXZw3i5g+YxrwdVfQiFI7zEu0WvBCwVWzS7HU1c2YtT2XXGpZrMi9KzTLWFltTH9eXMwdC9pDi5ACS8YrPa7hlD8qQWWImZLb1Sq/1ykCUArDF/JjK4WjoKLPLxM7AAAu749L5z60lMEpgo/SOXlZa/XtLjWLhSq5MyqpYPrUs5t0Tu7QJjHQxJDi2Hsbs2OWJeJ5tYyy3YNoDy3ihFbSffV4yv8WQvzPYbO8f9gsnxnE1Q2HzVJZs/Tzk//+lxBC/v3znOLqbWIHAMCVulIU+CqdU4SYXIfcDTQ1iAJQjCtmgY9LWJVXVekcfhy4B3tMINMZaJaiXyu+FX8eNktrfiod6fqj83tG1q7cwekU1J5mCQMtIAijqaHz0pFZ6BFMWi11Bpz7Ks5bBFVyZ8asd+p+lWHJ6iuXhhV5Zd3PWOtThiW5CfU+iqeEAD1DugiViLlPIuaPim7Bu7ziSkHxVYX+Ngiju57EY9MpUoG+SQws5488MxVCgeZ1xvHJuK55w0s5qZWGustwSqKgqItz5VlYNkUQKLcgn1Tx2pHHoNKE6M/qGPHGXehVTPj62h5aSaCddJXiSlC8lFc0tyAsV/ZOCUHwIIs6rVdCi21pupVS1bt7ow3cMy1mKy/HBnO3kZEWx6ZzXsG9iLW2PTlSYPlwD/axPbSW6zQNQRi9qlhciaxYqyqgRKIQV+5AYIEsstyzvsiyYDaJrcFidVlx3bsuMCAxakp3cV6RuNZFEA9Qz8uEHRepbxieCrg3hoDSFtSxirAygjCS1rK/d+maSsAWW4D8PcAIBZjbOsYyXDcjywpE6SYctqSk04omLSp305AsJViRlWRE98bUzlTMVVVusTVZhdQEs2is35D1obAyMagfuQrC6JeGu/pLI/BVj0/GQjnWBzzmN+5TEtHfEjuBTWDJlVojlxInoHfYZvVbKntzLOsgjGaGQVZn0iKRsqDzVYP3jIRX1waXopbFMYmStOe9JXFVdZ8Ua0J4QtbHvM9Id6G7FDIHPSDwGPz9pCoxR6sEn8NqlY6cMQRhtLO4AscomQN0yKRvE1hlWhdWhozdOm0SWHs6V5WuoS1xZHkZl+y+VffN13PW21zRZ8TdgwCklsqR2dH/Yfh8SXzTnT/IwlQaUlgFYSSF1WeIKydsZmu4CQHHJbi9TMFgG5xGDSidk4cVW4nV5pW8VaOXJPIponm29bzPiK+whXsQXBOk3IbPMokn30j5qI6xeL2Vx3Ata5MGpV54QisfEcTujs061aYYF+AHq/WqzHgK6aJ2sLQ2qXSOC9wFBW4Tk6Cq85nG2gRTxYK5tmtewgcWLHBNmsCqip+LiixyA/5Onz7WEiwDXh7CRJtcMKBCqDSOzVpUxWCysgW7G1bpNRkuHMYds3Lkzc00Zm7ggeEe+SZmbS6Pm1C38kJcgRvSXIRVokRWZuJQaaWSqRbkisAgjD7QbOIlxFVxyNJg6zRmfVtKC1KxuQf3JQW3c2zHHDa4dI4JLqa69n7ttDxfLp+5wSWXFXfnA255cs37xlc+QmCBG3xbsBRSZL2kdApy1Z90+d2hfXewCrBSYkvnMejzcnK4SG/hM7j9Bnn/gzDaWqxnTS6dw+Gupiz3Z184p3xXipmWpLUu1lqbV3FVtvPR47W2WCRUDH1S36UUDnVYsHR+puB0aZV6SB+Iqwo5bJZrh05jRu6hLmK7dm/X3eR7HITR2OFeVLkaznbsCSytrYYnYx00oDg2F+wuVlKsHiyIfH9lWpYgjKTQ/q/6BGH0KQijq5YtZjFSt8AC9WCzTjWhs6sKm8Dy+VLbfqvO2bxtcNlVnDPNNlgdm3Ub1I9phWWWdb1qeAiF7VymcA8Wg8TTe4p709NyLLS6ue+DMDLGYgZhdCk/4odQuwjCqO5yXgkgsHrIYbNcOZiyx5T0sWs0KaO9bTl4Le4Gx9xXleZyIjeBbcBCyoN2szfU/ruoOUZNj5ezLfLQ25+LZwB8Z0K1OuXzPz1slvIz1z5nWqqOmRJSjJGWsuW9Qew2Agis/uKyCuuiZcHELrikqvD1olozpCe2+MFUsoTjY7Zu+w3XZzUhi+ynxB4/mMq/gO+smUW9bus5ryGY9o7ySQisV+5ckBg9pZCVBHKCJQUXjVPTNEsWtRX5vO4dNsvGxQ1DYPUUatguDfKyC75wDeMLzajc1Ezm7CaIGBM2y1DsYyEArVC0iRHbs5JW2Cv63rCmWS5/f2DpuM3CIGrShI0PdOts2nnw7RBY+Th1CWYn0bQiSxZ/j9T/Ox2rDiCw+s3CobOXA9IbQ+NuJY6up0pTVdCxbe7XdR2rGSnwPm1QUfjM4WS1YiW23Ibfwzrcivw3ken7NiZX4WWNLh+9zQ0Nz0+wdtfF+pJVssgpiJQhwPQc8h7LK2kCS+ages4/lE4BdARqmGcOV6NElqmBtxFb/FDVboqZwwq9umbENsHiIlDLxPasRpbVmFzM1NGG9XsKcWUmZu3KZRJSFVsmzPk7wUUXnmk+ct0vmmiuDc+hrCLzlZEmsGQ5nD8MH1+FoYEnaCUYnz2aUCKrrk6vtNksuUdtL/mkimsl16DtuDtaiFAHXkvj2KD2abPkZbkJuSCces5DNUGdOmfOmSVoVuNChiw3of7/viccXaCIZX7bxvxxJ0cWcAYdgAZz1wDBC8pR4s18T0KnbLHjcr2lLv2lY7lYxlwEb+mQG7iO0jg2rDmxEltuw8/Z5yRB/y2XSgp9Zm94L+tyFXJrmt7GENxeD4O25b47oUzqoOfQig3Xzl92MJ+qtmZJlyQloUtbQVKYnEH+R18nHcNFXMVpK2s84JL7qo5zcymdk2XpiNmKzKkny8iMCVbE6thZGFIl1GE13xnK+QhD6gYIZj8MySXYqvfn5LBZytiqj4k9oHccNsvzHB3GgCw8UmhNy5xZkLB6Q7lSXILr9wVdLy5B/oKu840l1seI/Btp8XMUiaZgX5/YrHW1zNYpBsOaXiOx5TY8LclVxZaREXvmJusMMNMUVyF3LQ/YO+LSLkGSIitER21cfatisB4JIf6V2At6R06RJWhmcUkWLWntKZRHSrqnqGzCJxJWrh2qSlaXu6PTgvxdZkVj7Rqtoo+uR+Vecu1QaltuTPnObM+tztn6sW5CU76lNxWJrBEdW2cO65UzO4MYLd2K7QBvczx9BNyDxcglsMj6P2zj/b4u9nzYLP8SQjyj4su/a4WXOU8Q6N59pMiiYrt5VtKp2d31DI/+Xg9Q1gXQSPsbFfdTZKCTxzw7Jp2BFGZBGJ0ZBsQ0ppT4TlnNuLAbaYVi83BecekZG9as8jUXwY4t7VHGZ0wtiwMWdJ2q/SkhdFqi+BkZhNvKMFiDbBY0EOvPamYQXlWiAtiVIOCrf/FMi3FdJcQlMSh5DWaUtqadAktx2Cw/CyFeJL6lvhxGjyCw+oEcqEgkXRVcveESMH0MsnObl2HxkXFFQRidWwZwzsAwoy3KuUUYVApZHG3uwVoHE/mcgzCKLfd7bDnPPYmpT5oAGtH/n5Wwwm9msLTwosbAnXMqg6K4SJnUVImeHkDvB11Wt/YWsojL+7Uy9NExhV2ILJFFcZWqT3ZJJ9Q40tI0pPE5ZXtf+dDl6yaLyoOGxY7syWp1bnhxC0MC54FnN466lixR4IMs0aJowuyxjNI5e4PFSrkLLwtOJsb09yZxVaZ1rG+YxKnvMjppCxPgHsxGPqcLwzshSDivSGS9p9CQERVtHlCYyRWrV2h6Bo0nyHmCb4UQjxNb+0unBZb4Eac0D8JoXXNeGqGqrVf1spG78AF1DlVf57YBbkGFtbBzEzo46SIg12yWiJo6TAi2VEyWL6JQLu6YLBdZBXxH1EYmKZba2BCsXQTf79u2Ybm6Vix3WR2uwthg4a1rUtSW9iDfm9TAdApDWadYfYW2KKTRmdpt/PTt2zfLV34QhNEdzMZu+HjYLO8ntnYcyuU0TRlUqmJFL5rxZa0CLfdW1mBehD1dS6kDBJ2vqaNSzE2/STEOtiLIZ02Jf6CFA1nuTBkr9iCx1YzKFm4tW6T9e+DQ9udHCgD3Trl8XM9dP8djr9fGmMVI7sna7Ks/mFCohCL27LJqQ3u4BVmSRzyti9zOBZOWf29Iz3bXxngrE7kElvh+M17BinXN08Nm2dscYuQfVzFIVazE2pGw8lJY2IQWm1SG0FJJJldVXM8RAsv2d7Kq/S+JrTVBnfF7y6/fy3mPxyVZZ9dktTr2+UJgJblgQnhN7ldffNKsaHlXWh9L6wQW+E5eF6HkOa00/Dmxpz987LO4ErfLzZxTQOOIrdAqgjrmugmuM5ppXZup6RrHOQXlXrsmryVmcpBlDRJNWylFbtydJVZqknNQUM9oTPcjz8IFtdJshZxIlbLQclEJTRT7Gvxj+j2UxgHO5LZgie+zSJmu4WViRz/4KvOGHTbLzsdfFYWsW0PqDNNcKlvqrPY1ZggvBLnVeEZnnS1ZfjDgtpex5rbgYk613abFKwEAGkQhgSX6K7IgrgAAAABgJW+ahhvIRfaUREcf+AJxBQAAAAAXCgss8UNkyZV0fyZ2dgcpIP8hrxPiCgAAAAAuFHYRcoIwukvB748ySu20ic+U9+s1lRICAAAAAPArsAAAAAAAwHeOchECAAAAAIAkEFgAAAAAACUDgQUAAAAAUDIQWAAAAAAAJQOBBQAAAABQMhBYAAAAAAAlA4EFAAAAAFAyEFgAAAAAACUDgQUAAAAAUDIQWAAAAAAAJQOBBQAAAABQMhBYAAAAAABlIoT4fyozh5g7x4xjAAAAAElFTkSuQmCC"
          alt="Logo guia serve"
        />
      </S.CenteredWrapper>
    </S.Wrapper>
  )
}

export default Main
