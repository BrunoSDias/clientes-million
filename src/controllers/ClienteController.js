const Cliente = require('../models/Cliente')
const TOKEN = '123456'

const ClienteController = {
  home: async (req, res, next) => {
    return res
      .status(200)
      .json({
        info: 'API Tesouro Direto Cliente - Million - protegido com token'
      })
  },

  index: async (req, res, next) => {
    if (req.headers.token === TOKEN) {
      try {
        const cliente = await Cliente.find({})
        return res.status(200).send(cliente)
      } catch (err) {
        return res.status(401).send(err)
      }
    }
    return res.status(401).json({ error: 'Acesso não autorizado' })
  },

  getById: async (req, res, next) => {
    if (req.headers.token === TOKEN) {
      try {
        const cliente = await Cliente.findById(req.params.cpf)
        return res.status(200).send(cliente)
      } catch (error) {
        res.status(401).send(err)
      }
    }
    return res.status(401).json({ error: 'Acesso não autorizado' })
  },

  create: async (req, res, next) => {
    console.log(req);
    if (req.headers.token === TOKEN) {
      const { nome, sobrenome, cpf, senha, login } = req.body
      try {
        const cliente = await Cliente.create({
          nome,
          sobrenome,
          cpf,
          senha,
          login
        })
        return res.status(201).send(cliente)
      } catch (error) {
        return res.status(401).send(error)
      }
    }
    return res.status(401).json({ error: 'Acesso não autorizado' })
  },

  login: async (req, res, next) => {
    if (req.headers.token === TOKEN) {
      const { senha, login } = req.body
      try {
        cliente = await Cliente.findOne({
          senha: senha,
          login: login
        })
        
        return res.status(200).send(cliente)
      } catch (error) {
        return res.status(401).send(error)
      }
    }
    return res.status(401).json({ error: 'Acesso não autorizado' })
  },

  change: async (req, res, next) => {
    if (req.headers.token === TOKEN) {
      const { nome, sobrenome, cpf, senha, login} = req.body
      const {_id} = req.params

      try {
        await Cliente.findOneAndUpdate(
          {_id: _id},
          {
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            senha:senha,
            login
          }
        )
        return res
          .status(204)
          .send(`Alterado com sucesso`)
      } catch (err) {
        console.log(err)
        return res.status(401).send(`Erro: ${err}`)
      }
    }
    return res.status(401).json({ error: 'Acesso não autorizado' })
  },

  delete: async (req, res, next) => {
    if (req.headers.token === TOKEN) {
      try {
        await Cliente.findByIdAndDelete(req.params._id)
        return res.status(204).send({})
      } catch (err) {
        return res.status(401).send(err)
      }
    }
    return res.status(401).json({ error: 'Acesso não autorizado' })
  }
}

module.exports = ClienteController
